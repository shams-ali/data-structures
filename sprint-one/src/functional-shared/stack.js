var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //base object contains storage object, and length variable
  var newStack = {};
  newStack.storage = {};
  newStack.length = 0;
  extend(newStack, stackMethods); //might fix later

  return newStack;
};

//make object to store methods
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

//make method for push, pop, size

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.length];
  }
};

stackMethods.size = function() {
  return this.length;
};

//use this

//use extend


//don't use new or prototype
