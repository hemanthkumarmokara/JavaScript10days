const fs = require('fs');

const readStream = fs.createReadStream('largefile.txt', 'utf8'); // source file
const writeStream = fs.createWriteStream('copy.txt'); // destination file

// Pipe: read from source and write to destination
readStream.pipe(writeStream);

readStream.on('open', () => {
  console.log('Reading started...');
});

writeStream.on('finish', () => {
  console.log('Writing completed!');
});

// Optional: handle errors
readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writeStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

