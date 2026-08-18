import { createCookieHeader } from '../_utils/auth.js';

export default async function handler(req, res) {
  const clearSession = createCookieHeader('admin_session', '', 0);
  const clearPreAuth = createCookieHeader('pre_auth_token', '', 0);

  res.setHeader('Set-Cookie', [clearSession, clearPreAuth]);
  return res.status(200).json({ success: true, message: 'Logged out successfully.' });
}
