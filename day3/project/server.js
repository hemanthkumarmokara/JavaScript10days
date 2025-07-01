const http = require('http');

const tasks = [
  { id: 1, task: 'Learn JavaScript' },
  { id: 2, task: 'Build a server' },
  { id: 3, task: 'Use Axios to fetch' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/tasks') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(5000, () => {
  console.log(' running at http://localhost:5000');
});

