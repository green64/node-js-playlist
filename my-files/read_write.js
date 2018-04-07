var fs = require('fs');

//synchronous, so it blocks other code til executed
//there is an asynchronous version
// var readMe = fs.readFileSync('readme.txt', 'utf8');

fs.writeFileSync('writeme.txt', 'readMe');



//asynchronous version takes 3rd parameter
fs.readFile('readme.txt', 'utf8', function(err, data){
fs.writeFile('writeme.txt', data, function(){

});
});
console.log('test');

// //this deletes writeme.txt
fs.unlink('writeme.txt');

//these are the synchronous versions
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

//these are the ASYNchronous versions
//they require callbacks
fs.mkdir('stuff', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});


//to delete directory, delete file in it first
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');

});
