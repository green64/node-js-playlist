//instead of listening for data, pipes automatically pipe the stream somewhere
var http = require('http');

//fs =  file system
var fs = require("fs");

//adding utf8 puts the data into readable format
var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var myReadStream = fs.createReadStream(__dirname + "/lorem.txt", "utf8");
  //can't pipe from writeable stream
  //this is listening for the event and piping to user
  myReadStream.pipe(res);

});

server.listen(3000, "127.0.0.1");
console.log('you dawg this is port 3000');