var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //base object contains storage object, and length variable
  this.storage = {};
  this.length = 0;
   //might fix later

};




//make method for push, pop, size

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.length];
  }
};

Stack.prototype.size = function() {
  return this.length;
};
