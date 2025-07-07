const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error:', err);
  console.log(data);
});

