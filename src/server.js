const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3001;
const DIR  = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  const url      = req.url.split('?')[0];
  const filePath = path.join(DIR, url === '/' ? 'index.html' : url);
  const ext      = path.extname(filePath).toLowerCase();
  const ct       = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('404 Not Found'); return; }
    res.writeHead(200, { 'Content-Type': ct });
    res.end(data);
  });
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Wedding site → http://localhost:${PORT}`);
});
