/*
Event: 'listening'

Emitted when the server has been bound after calling server.listen().
*/
const net = require('net');

const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      //server.listen(PORT, HOST);
    }, 1000);
  }
});

//Don't call server.address() until the 'listening' event has been emitted.

/*
server.listen()
Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.

Possible signatures:
server.listen(handle[, backlog][, callback])
server.listen(options[, callback])
server.listen(path[, backlog][, callback]) for IPC servers
server.listen([port[, host[, backlog]]][, callback]) for TCP servers

This function is asynchronous. When the server starts listening, the 'listening' event will be emitted.
The last parameter callback will be added as a listener for the 'listening' event.
*/
