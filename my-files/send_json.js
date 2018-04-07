var http = require('http');

//fs =  file system
var fs = require("fs");

//adding utf8 puts the data into readable format
var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var myObj = {
    name: "Ryu", 
    job: 'Ninja',
    age: 29
  };
  //.end method expects a string or buffer
  res.end(JSON.stringify(myObj.name));
});

server.listen(3000, "127.0.0.1");
console.log('you dawg this is port 3000');