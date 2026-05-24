const http = require('http');
const url = 'http://localhost:3004';
http.get(url, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const cssLinks = [...data.matchAll(/<link[^>]*rel="stylesheet"[^>]*>/g)];
    const hrefs = [...data.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
    console.log('STYLESHEET:', cssLinks.length > 0);
    console.log('CSSLINKS:', cssLinks.length);
    console.log('NEXTCSS_HREFS:', hrefs.filter(h => h.includes('/_next/static/css/')));
    const head = data.split('<head>')[1]?.split('</head>')[0] || '';
    console.log('HEAD_CONTENT_START:', head.slice(0, 1000));
  });
}).on('error', err => console.error(err));
