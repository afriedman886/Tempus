// var http = require('http');
var port = 1337;
var express = require('express');
var app = express();

// http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });

//   res.end("Hello Amy, you've stumbled on the simplest web server ever.");

// }).listen(port);

// console.log('Our awesome web server running at http://localhost:' + port);

app.use('/', function(req, res) {
  res.send('Hello World');
});

app.listen(port);

console.log('Server running at http://localhost:' + port);