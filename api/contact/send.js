export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { clientName, clientEmail, projectType, budget, timeline, message } = req.body || {};

  if (!clientName || !clientEmail || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Forward email dispatch
  try {
    await fetch('https://formsubmit.co/ajax/dineshelumalai2006@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      },
      body: JSON.stringify({
        _subject: `[New Portfolio Hire Request] ${projectType} from ${clientName}`,
        name: clientName,
        email: clientEmail,
        projectType: projectType || 'Full-Stack Web App',
        budget: budget || '$3,000 - $5,000',
        timeline: timeline || '1 Month',
        message: message
      })
    });
  } catch (err) {
    console.error("Email notification dispatch error:", err);
  }

  return res.status(200).json({
    success: true,
    message: 'Hiring proposal received and email notification sent to dineshelumalai2006@gmail.com.'
  });
}
