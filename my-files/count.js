// module.exports.counter = function(arr){
//   return "there are " + arr.length + ' elements in this array';
// };

// module.exports.adder = function(a,b){
//   return `the sum of the 2 numbers is ${a+b}`;
// };

// module.exports.pi = 3.142;


//another way to do the same thing
var counter = function(arr){
  return "there are " + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `the sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};