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

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Invalid credentials provided.' });
  }

  const isEmailValid = email.trim().toLowerCase() === 'dineshelumalai2006@gmail.com';
  const isPasswordValid = (password === 'Dinesh@2026');

  if (!isEmailValid || !isPasswordValid) {
    return res.status(401).json({ error: 'Invalid authentication credentials provided.' });
  }

  // Set pre_auth_token cookie
  res.setHeader('Set-Cookie', 'pre_auth_token=pending; Path=/; HttpOnly; SameSite=Strict; Max-Age=300');
  
  return res.status(200).json({ 
    success: true, 
    requireTotp: true, 
    message: 'Password verified. Please enter your 6-digit Google Authenticator code.' 
  });
}
