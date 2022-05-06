var net = require('net');
var server = net.createServer(function (socket) {
  console.log('Connection from' + socket.remoteAddress);
  socket.end('Hello World\n');
});
var port = 7000;
server.listen(port, 'localhost');
console.log(`TCP server listening on port ${port} at localhost.`);
