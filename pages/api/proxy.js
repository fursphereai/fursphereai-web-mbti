// pages/api/proxy.js
import https from 'https';
import http from 'http';
import { parse } from 'url';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  const parsedUrl = parse(url);

  const client = parsedUrl.protocol === 'https:' ? https : http;

  client.get(parsedUrl, (proxyRes) => {
    if (proxyRes.statusCode !== 200) {
      res.status(proxyRes.statusCode).json({ error: 'Failed to fetch resource' });
      return;
    }

    res.setHeader('Content-Type', proxyRes.headers['content-type']);
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

    proxyRes.pipe(res);
  }).on('error', (error) => {
    res.status(500).json({ error: 'Failed to fetch resource' });
  });
}
