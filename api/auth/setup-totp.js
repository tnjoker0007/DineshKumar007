import { getEnv } from '../_utils/auth.js';

export default async function handler(req, res) {
  const { adminEmail, totpSecret } = getEnv();
  const otpAuthUrl = `otpauth://totp/Dinesh%20Portfolio:${encodeURIComponent(adminEmail)}?secret=${totpSecret}&issuer=Dinesh%20Portfolio`;

  return res.status(200).json({
    email: adminEmail,
    secret: totpSecret,
    otpAuthUrl: otpAuthUrl
  });
}
