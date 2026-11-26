/* Tiny static server over the repo root for the Ch12 asset builders (no background process needed).
   const srv = require('./serve.js')(); ... srv.url + 'scripts/pu1-ch12/harness.html' ... srv.close() */
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.pdf': 'application/pdf', '.mp3': 'audio/mpeg' };
module.exports = function serve(){
  const srv = http.createServer((q, r) => {
    const p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
    if (p.startsWith(ROOT) && fs.existsSync(p) && fs.statSync(p).isFile()){ r.setHeader('content-type', TYPES[path.extname(p)] || 'application/octet-stream'); r.end(fs.readFileSync(p)); }
    else { r.statusCode = 404; r.end(); }
  }).listen(0);
  return { url: 'http://localhost:' + srv.address().port + '/', close: () => srv.close() };
};
