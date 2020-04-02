/*
Class: net.Socket

This class is an abstraction of a TCP socket or a streaming IPC endpoint. It is also an EventEmitter.

A net.Socket can be created by the user and used directly to interact with a server.
For example, it is returned by net.createConnection(), so the user can use it to talk to the server.

It can also be created by Node.js and passed to the user when a connection is received.
For example, it is passed to the listeners of a 'connection' event emitted on a net.Server,
so the user can use it to interact with the client.

*/
const net = require('net');
net.connect({
  port: 80,
  onread: {
    // Reuses a 4KiB Buffer for every read from the socket.
    buffer: Buffer.alloc(4 * 1024),
    callback: function(nread, buf) {
      // Received data is available in `buf` from 0 to `nread`.
      console.log(buf.toString('utf8', 0, nread));
    }
  }
});
