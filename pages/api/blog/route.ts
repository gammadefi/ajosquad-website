import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = await fetch('https://ajosquad-backend.onrender.com/blog')
    const data = await result.json();
    res.status(200).json({ data })
  } else {
    // Handle other request methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}