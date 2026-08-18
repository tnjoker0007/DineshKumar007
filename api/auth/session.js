import { getEnv, parseCookies, verifyToken } from '../_utils/auth.js';

export default async function handler(req, res) {
  const cookies = parseCookies(req);
  const { sessionSecret, adminEmail } = getEnv();

  const adminSession = cookies.admin_session;
  const sessionData = verifyToken(adminSession, sessionSecret);

  if (sessionData && sessionData.role === 'admin') {
    return res.status(200).json({
      authenticated: true,
      user: { email: adminEmail }
    });
  }

  const preAuthToken = cookies.pre_auth_token;
  const preAuthData = verifyToken(preAuthToken, sessionSecret);

  if (preAuthData && preAuthData.step === '2fa_pending') {
    return res.status(200).json({
      authenticated: false,
      step: '2fa',
      message: 'Password verified. 2FA verification required.'
    });
  }

  return res.status(200).json({
    authenticated: false,
    step: 'login'
  });
}
