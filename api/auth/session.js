export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const rawCookies = req.headers['cookie'] || '';
    
    if (rawCookies.includes('admin_session=')) {
      return res.status(200).json({
        authenticated: true,
        user: { email: 'dineshelumalai2006@gmail.com' }
      });
    }

    if (rawCookies.includes('pre_auth_token=')) {
      return res.status(200).json({
        authenticated: false,
        step: '2fa',
        message: 'Password verified. 2FA verification required.'
      });
    }
  } catch (err) {}

  return res.status(200).json({
    authenticated: false,
    step: 'login'
  });
}
