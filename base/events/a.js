//All objects that emit events are instances of the EventEmitter class.

/*
The following example shows a simple EventEmitter instance with a single listener.
The eventEmitter.on() method is used to register listeners,
while the eventEmitter.emit() method is used to trigger the event
*/

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

  constructor(options) {
    super();
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }

}

const myEmitter = new MyEmitter();

myEmitter.on('event1', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event1');


myEmitter.on('event2', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event2', 'a', 'b');


myEmitter.on('event3', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event3', 'a', 'b');


/*
switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods
*/
myEmitter.on('event4', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event4', 'a', 'b');

//Handling events only once
let m = 0;
myEmitter.on('event5', () => {
  console.log(++m);
});
myEmitter.emit('event5');
// Prints: 1
myEmitter.emit('event5');
// Prints: 2

let n = 0;
myEmitter.once('event6', () => {
  console.log(++n);
});
myEmitter.emit('event6');
// Prints: 1
myEmitter.emit('event6');
// Ignored

//Error events
/*
When an error occurs within an EventEmitter instance,
the typical action is for an 'error' event to be emitted.
These are treated as special cases within Node.js
*/
//myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js

//As a best practice, listeners should always be added for the 'error' events.
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
