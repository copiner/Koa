/*
events.on(emitter, eventName)

Added in: v12.16.0

emitter <EventEmitter>
eventName <string> | <symbol> The name of the event being listened for
Returns: <AsyncIterator> that iterates eventName events emitted by the emitter

*/

const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await(const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
})();
