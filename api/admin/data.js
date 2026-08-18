import { defaultPortfolioData } from '../_utils/defaultData.js';

const UPSTASH_URL = process.env.KV_REST_API_URL || 'https://ethical-kangaroo-158889.upstash.io';
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || 'gQAAAAAAAmypAAIgcDIxNWFkNDczZWZlMjI0ZTRhOTY5ZjU2ODlkZmEyNjliZQ';
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
      const response = await fetch(`${UPSTASH_URL}/get/${REDIS_KEY}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
      });
      
      if (response.ok) {
        const body = await response.json();
        if (body && body.result) {
          const parsed = typeof body.result === 'string' ? JSON.parse(body.result) : body.result;
          return res.status(200).json({
            success: true,
            source: 'upstash_rest_cloud',
            data: parsed
          });
        }
      }
    } catch (err) {
      console.error("Upstash GET REST error:", err);
    }

    return res.status(200).json({
      success: true,
      source: 'default_fallback',
      data: defaultPortfolioData
    });
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const authHeader = req.headers['authorization'] || '';
    const cookies = req.headers['cookie'] || '';

    const isAuthenticated = 
      body.masterKey === 'Dinesh@2026' || 
      authHeader.includes('Dinesh@2026') || 
      cookies.includes('admin_session');

    if (!isAuthenticated) {
      return res.status(401).json({ error: 'Unauthorized: Admin authentication required.' });
    }

    if (body.data) {
      try {
        const dataString = JSON.stringify(body.data);
        const setResponse = await fetch(`${UPSTASH_URL}/set/${REDIS_KEY}`, {
          method: 'POST',
          headers: { 
            Authorization: `Bearer ${UPSTASH_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: dataString
        });

        if (setResponse.ok) {
          return res.status(200).json({
            success: true,
            message: 'Portfolio data saved permanently to Upstash Cloud Database!',
            data: body.data
          });
        } else {
          const errText = await setResponse.text();
          return res.status(500).json({ error: 'Upstash SET Error: ' + errText });
        }
      } catch (err) {
        return res.status(500).json({ error: 'Write failed: ' + err.message });
      }
    }

    return res.status(400).json({ error: 'Invalid data payload.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
