export default function handler(req, res) {
  res.status(200).json({ message: 'This is an API Route (src/pages/api/frontend-pages.js). Explanation: API routes are placed inside src/pages/api, and the file name defines the endpoint. Placing frontend-pages.js inside src/pages/api creates an API endpoint at /api/frontend-pages.' });
};