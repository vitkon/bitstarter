var express = require('express');
var fs = require('fs');
var f = fs.readFile('index.html');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(f);

  //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
