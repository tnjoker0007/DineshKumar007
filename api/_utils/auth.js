import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcryptjs';

// Default Fallbacks for Local Dev / Testing if Env Vars are unset
const DEFAULT_EMAIL = 'dineshelumalai2006@gmail.com';
// Default bcrypt hash for "Dinesh@2026"
const DEFAULT_PASSWORD_HASH = '$2a$10$8v8mFfKkQGZ6R7/wQ.a0Qe4x1n9v6xRk0G9q8.Qz3c8a9m6B4vK2O'; // Dinesh@2026
const DEFAULT_SESSION_SECRET = 'dinesh_super_secret_jwt_key_2026_verifying_session';
const DEFAULT_TOTP_SECRET = 'DINESHKUMAR2FAKE';

// Failed attempt rate limiter in memory
const failedAttempts = new Map();

export const getEnv = () => ({
  adminEmail: process.env.ADMIN_EMAIL || DEFAULT_EMAIL,
  adminPasswordHash: process.env.ADMIN_PASSWORD_HASH || DEFAULT_PASSWORD_HASH,
  totpSecret: process.env.TOTP_SECRET || DEFAULT_TOTP_SECRET,
  sessionSecret: process.env.SESSION_SECRET || DEFAULT_SESSION_SECRET
});

export const parseCookies = (req) => {
  const list = {};
  const rc = req.headers.cookie;
  if (rc) {
    rc.split(';').forEach((c) => {
      const parts = c.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  }
  return list;
};

export const checkRateLimit = (clientIp) => {
  const now = Date.now();
  const attempts = failedAttempts.get(clientIp) || { count: 0, firstAttempt: now, lockedUntil: 0 };

  if (attempts.lockedUntil > now) {
    const remainingMins = Math.ceil((attempts.lockedUntil - now) / 60000);
    return { allowed: false, message: `Too many failed attempts. Locked out for ${remainingMins} minute(s).` };
  }

  return { allowed: true };
};

export const recordFailedAttempt = (clientIp) => {
  const now = Date.now();
  const attempts = failedAttempts.get(clientIp) || { count: 0, firstAttempt: now, lockedUntil: 0 };
  attempts.count += 1;

  if (attempts.count >= 5) {
    attempts.lockedUntil = now + 15 * 60 * 1000; // 15 minute lockout
  }
  failedAttempts.set(clientIp, attempts);
};

export const clearFailedAttempts = (clientIp) => {
  failedAttempts.delete(clientIp);
};

export const createCookieHeader = (name, value, maxAgeSecs) => {
  const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
  return cookie.serialize(name, value, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'strict',
    path: '/',
    maxAge: maxAgeSecs
  });
};

export const signToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
