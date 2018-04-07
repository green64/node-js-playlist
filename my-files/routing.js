var http = require('http');

//fs =  file system
var fs = require("fs");

//adding utf8 puts the data into readable format
var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  //this one doesn't work
  } else if (req.url === 'api/ninjas'){
    var ninjas = [{name: 'Ryu', age: 29}, {name: 'Yoshi', age: 32}];
    res.writeHead(200, {'Content-Type:': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log('you dawg this is port 3000');