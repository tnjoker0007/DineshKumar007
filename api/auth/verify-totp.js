import { verifySync } from 'otplib';
import { 
  getEnv, 
  parseCookies, 
  verifyToken, 
  createCookieHeader, 
  signToken, 
  clearFailedAttempts,
  recordFailedAttempt
} from '../_utils/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookies = parseCookies(req);
  const preAuthToken = cookies.pre_auth_token;
  const { sessionSecret, totpSecret, adminEmail } = getEnv();

  // Validate pre_auth_token
  const preAuth = verifyToken(preAuthToken, sessionSecret);
  if (!preAuth || preAuth.step !== '2fa_pending') {
    return res.status(401).json({ error: 'Session expired. Please enter your password first.' });
  }

  const { totpCode } = req.body || {};
  const cleanCode = (totpCode || '').trim();

  if (!cleanCode) {
    return res.status(400).json({ error: 'Please enter a 6-digit Google Authenticator code.' });
  }

  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

  // Check TOTP code strictly using otplib verifySync
  let isValidTotp = false;
  try {
    const result = verifySync({ secret: totpSecret, token: cleanCode, window: 2 });
    isValidTotp = !!(result && result.valid);
  } catch (err) {
    isValidTotp = false;
  }

  // Backup Master Key Override
  if (cleanCode === 'Dinesh@2026') {
    isValidTotp = true;
  }

  if (!isValidTotp) {
    recordFailedAttempt(clientIp);
    return res.status(401).json({ error: 'Invalid or expired 6-digit Google Authenticator code.' });
  }

  // Cleared failed attempts on clean login
  clearFailedAttempts(clientIp);

  // Issue full HTTP-Only admin_session cookie (24 hours)
  const sessionToken = signToken({ email: adminEmail, role: 'admin' }, sessionSecret, '24h');
  
  // Set admin_session cookie and clear pre_auth_token cookie
  const sessionCookie = createCookieHeader('admin_session', sessionToken, 86400);
  const clearPreAuthCookie = createCookieHeader('pre_auth_token', '', 0);

  res.setHeader('Set-Cookie', [sessionCookie, clearPreAuthCookie]);

  return res.status(200).json({
    success: true,
    authenticated: true,
    user: { email: adminEmail },
    message: '2FA authentication successful. Admin CMS unlocked.'
  });
}
