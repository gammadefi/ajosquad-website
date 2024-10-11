import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body; // Only email needed for subscription

    // MailerLite API URL for subscribers
    const mailerLiteUrl = 'https://connect.mailerlite.com/api/subscribers';
    const apiKey = process.env.MAILERLITE_API_KEY;

    try {
      const response = await axios.post(
        mailerLiteUrl,
        { email }, // Send the email
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // MailerLite API Key
          },
        }
      );

      // Handle successful subscription
      res.status(200).json({ success: true, data: response.data });
    } catch (error:any) {
      // Handle errors
      res.status(500).json({ success: false, error: error.response.data });
    }
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
