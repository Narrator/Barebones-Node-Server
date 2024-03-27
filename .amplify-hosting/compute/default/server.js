const http = require('http');

// Start timer
console.time('Ready in');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, s-maxage=0, must-revalidate');
  res.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.timeEnd('Ready in');
});

