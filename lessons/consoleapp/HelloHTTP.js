var http = require('http');
var server = http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});
var port = 8000;
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
});
console.log('Server running at http://127.0.0.1:8000/');
