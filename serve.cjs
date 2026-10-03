const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const host = process.argv[2] || '0.0.0.0';
const port = Number(process.argv[3] || 8765);
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/data.js', ['data.js', 'text/javascript; charset=utf-8']],
  ['/logic.js', ['logic.js', 'text/javascript; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']]
]);
const server = http.createServer((req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  let pathname;
  try { pathname = new URL(req.url, 'http://localhost').pathname; }
  catch { res.writeHead(400); return res.end(); }
  if (pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(req.method === 'HEAD' ? '' : JSON.stringify({ app: 'care-medicine-52', ready: true }));
  }
  const entry = files.get(pathname);
  if (!entry) { res.writeHead(404); return res.end('Not found'); }
  fs.readFile(path.join(__dirname, 'dist', entry[0]), (err, data) => {
    if (err) { res.writeHead(500); return res.end('Unable to load app'); }
    res.writeHead(200, { 'Content-Type': entry[1], 'Content-Length': data.length });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});
server.on('error', err => { console.error(err.message); process.exitCode = 1; });
server.listen(port, host, () => console.log(JSON.stringify({ app: 'care-medicine-52', host, port, pid: process.pid })));
process.on('SIGINT', () => server.close());
process.on('SIGTERM', () => server.close());
