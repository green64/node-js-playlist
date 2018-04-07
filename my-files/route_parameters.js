var express = require('express');

var app = express();

//http://localhost:3000/ returns
app.get('/', function (req, res) {
  res.send('this is the homepage');
});
//http://localhost:3000/contact returns
app.get('/contact', function (req, res) {
  res.send('this is the contact page');
});

//these are parameters you can use
app.get('/profile/:name', function (req, res) {
  res.send('You requested a profile with the name of ' + req.params.name);
});

app.listen(3000);
// console.log('this is working');

//http requests include get, post, delete, put
//get - app.get('route', fn)
//post - app.post("route", fn)
//delete - app.delete("route", fn)

