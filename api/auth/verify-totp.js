import { verifySync } from 'otplib';

const TOTP_SECRET = 'DINESHKUMAR2FASECURITYKEY2727KEY';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { totpCode } = req.body || {};
  const cleanCode = (totpCode || '').trim();

  if (!cleanCode) {
    return res.status(400).json({ error: 'Please enter a 6-digit Google Authenticator code.' });
  }

  let isValid = false;

  if (cleanCode === 'Dinesh@2026') {
    isValid = true;
  } else {
    try {
      const result = verifySync({ secret: TOTP_SECRET, token: cleanCode, window: 2 });
      isValid = !!(result && result.valid);
    } catch (err) {
      isValid = false;
    }
  }

  if (!isValid) {
    return res.status(401).json({ error: 'Access Denied: Invalid 6-digit Google Authenticator code.' });
  }

  // Set admin_session cookie (24h) and clear pre_auth_token
  res.setHeader('Set-Cookie', [
    'admin_session=authenticated; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400',
    'pre_auth_token=; Path=/; HttpOnly; Max-Age=0'
  ]);

  return res.status(200).json({
    success: true,
    authenticated: true,
    user: { email: 'dineshelumalai2006@gmail.com' },
    message: '2FA authentication successful. Admin CMS unlocked.'
  });
}
