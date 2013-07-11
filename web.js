var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var f = fs.readFile('index.html');
  response.send(f);

  //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
