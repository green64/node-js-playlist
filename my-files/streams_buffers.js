//buffers and streams allow you to consume data to smaller chunks
//increase performance of application

//writeable streams allow node js to write data to a stream
//readable streams allow node to read data from a stream
//duplex can read/write to a stream

var http = require('http');

//fs =  file system
var fs = require("fs");

//adding utf8 puts the data into readable format
var myReadStream = fs.createReadStream(__dirname + "/lorem.txt", "utf8");

//createReadStream inherits from emitter
myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  console.log(chunk);
})