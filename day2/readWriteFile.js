const fs = require('fs');

// Write a file
fs.writeFileSync('data.txt', 'Hello from Node');

// Read a file
const content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);

