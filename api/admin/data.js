import { defaultPortfolioData } from '../../src/data/defaultData.js';
import { parseCookies, verifyToken, getEnv } from '../_utils/auth.js';

// In-Memory Global Data Store (persists across serverless function warm instances)
let globalPortfolioData = { ...defaultPortfolioData };

export default async function handler(req, res) {
  // CORS Headers for global cross-browser access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      data: globalPortfolioData
    });
  }

  if (req.method === 'POST') {
    const cookies = parseCookies(req);
    const { sessionSecret } = getEnv();

    const adminSession = cookies.admin_session;
    const sessionData = verifyToken(adminSession, sessionSecret);

    // Verify authenticated admin session or master key in body
    const body = req.body || {};
    const isAuthenticated = (sessionData && sessionData.role === 'admin') || body.masterKey === 'Dinesh@2026';

    if (!isAuthenticated) {
      return res.status(401).json({ error: 'Unauthorized: Admin authentication required to save global changes.' });
    }

    if (body.data) {
      globalPortfolioData = body.data;
      return res.status(200).json({
        success: true,
        message: 'Portfolio data updated globally for all visitors across all devices.',
        data: globalPortfolioData
      });
    }

    return res.status(400).json({ error: 'Invalid data payload provided.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
