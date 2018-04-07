var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

 //this returns in view/profile.ejs
 app.get('/profile/:name', function(req, res){

 var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'reading']}
  res.render('profile', {person: req.params.name, data: data});

});
//http requests include get, post, delete, put
//get - app.get('route', fn)
//post - app.post("route", fn)
//delete - app.delete("route", fn)

app.listen(3000);