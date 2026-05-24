const http = require('http');
const url = 'http://localhost:3004/_next/static/css/app/layout.css';
http.get(url, res => {
  console.log('STATUS', res.statusCode);
  console.log('HEADERS', res.headers['content-type']);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('LENGTH', data.length);
    console.log('BODY_START', data.slice(0, 200).replace(/\n/g, ' '));
  });
}).on('error', err => console.error('ERROR', err.message));
