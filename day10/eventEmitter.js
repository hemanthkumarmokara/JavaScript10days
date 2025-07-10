const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('log', (msg) => {
  console.log('Log event received:', msg);
});

myEmitter.emit('log', 'User logged in');

