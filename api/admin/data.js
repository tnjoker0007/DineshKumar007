import { Redis } from '@upstash/redis';
import { defaultPortfolioData } from '../../src/data/defaultData.js';
import { parseCookies, verifyToken, getEnv } from '../_utils/auth.js';

const redis = new Redis({
  url: process.env.KV_REST_API_URL || 'https://ethical-kangaroo-158889.upstash.io',
  token: process.env.KV_REST_API_TOKEN || 'gQAAAAAAAmypAAIgcDIxNWFkNDczZWZlMjI0ZTRhOTY5ZjU2ODlkZmEyNjliZQ',
});

const REDIS_KEY = 'dinesh_portfolio_global_data_v1';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const storedData = await redis.get(REDIS_KEY);
      let finalData = defaultPortfolioData;

      if (storedData) {
        finalData = typeof storedData === 'string' ? JSON.parse(storedData) : storedData;
      }

      return res.status(200).json({
        success: true,
        source: storedData ? 'upstash_cloud_redis' : 'default',
        data: finalData
      });
    } catch (err) {
      console.error("Redis GET error:", err);
      return res.status(200).json({
        success: true,
        source: 'fallback_default',
        data: defaultPortfolioData
      });
    }
  }

  if (req.method === 'POST') {
    const cookies = parseCookies(req);
    const { sessionSecret } = getEnv();

    const adminSession = cookies.admin_session;
    const sessionData = verifyToken(adminSession, sessionSecret);

    const body = req.body || {};
    const isAuthenticated = (sessionData && sessionData.role === 'admin') || body.masterKey === 'Dinesh@2026';

    if (!isAuthenticated) {
      return res.status(401).json({ error: 'Unauthorized: Admin authentication required.' });
    }

    if (body.data) {
      try {
        await redis.set(REDIS_KEY, JSON.stringify(body.data));
        return res.status(200).json({
          success: true,
          message: 'Portfolio data permanently saved to Upstash Redis Cloud Database. Live for all visitors globally!',
          data: body.data
        });
      } catch (err) {
        console.error("Redis SET error:", err);
        return res.status(500).json({ error: 'Failed to write to cloud database: ' + err.message });
      }
    }

    return res.status(400).json({ error: 'Invalid data payload provided.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
