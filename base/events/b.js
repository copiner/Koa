
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});

myEmitter.emit('event');
// Prints:
//   B
//   A

console.log(myEmitter.getMaxListeners());
// myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);
// myEmitter.once('event', () => {
//   // do stuff
//   myEmitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
// });

/*
emitter.addListener(eventName, listener)
Alias for emitter.on(eventName, listener)
*/
