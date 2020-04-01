/*
emitter.eventNames()

Returns an array listing the events for which the emitter has registered listeners.
The values in the array will be strings or Symbols.
*/
const util = require('util');

const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('copiner');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(copiner) ]

/*
emitter.listenerCount(eventName)

Returns the number of listeners listening to the event named eventName
*/

myEE.on('cop', () => {});
myEE.on('cop', () => {});
console.log(myEE.listenerCount('cop'));


/*
emitter.listeners(eventName)

Returns a copy of the array of listeners for the event named eventName
*/
const server = new EventEmitter();

server.on('connection', (stream) => {
  console.log('someone connected!');
});
server.on('connection', (stream) => {
  console.log('someone connected again!');
});

console.log(util.inspect(server.listeners('connection')));

/*
emitter.off(eventName, listener)

Alias for emitter.removeListener()
*/

/*
emitter.on(eventName, listener)

Adds the listener function to the end of the listeners array for the event named eventName.
No checks are made to see if the listener has already been added.
Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times
*/

//By default, event listeners are invoked in the order they are added.
//The emitter.prependListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.

const myEle = new EventEmitter();
myEle.on('foo', () => console.log('al'));
myEle.prependListener('foo', () => console.log('bl'));
myEle.emit('foo');

myEle.emit('foo');

/*
emitter.once(eventName, listener)

By default, event listeners are invoked in the order they are added.
The emitter.prependOnceListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.
*/

const myOne = new EventEmitter();
myOne.once('foo', () => console.log('ao'));
myOne.prependOnceListener('foo', () => console.log('bo'));
myOne.emit('foo');

myOne.emit('foo');
