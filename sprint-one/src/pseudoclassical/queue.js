var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//create  base object with basic properties
  
  this.storage = {};
  this.storageLength = Object.keys(this.storage).length;
  
};

//add methods to method object
Queue.prototype.enqueue = function(value) {
  if (this.storageLength === undefined) {
    this.storage[0] = value;
  } else {
    this.storage[this.storageLength] = value;
  }
  this.storageLength = Object.keys(this.storage).length;
};

Queue.prototype.dequeue = function() {
  var res = this.storage[0];
  delete this.storage[0];
  //update storage object with new key 
  //subtract current key - 1

  //for in loop over object
  //storage[+(key)-1] = object[key]
  for (var key in this.storage) {
    this.newKey = +key - 1;
    this.storage[this.newKey] = this.storage[key];
    delete this.storage[key];
  }
  this.storageLength = Object.keys(this.storage).length;
  return res;
};

Queue.prototype.size = function() {
  this.storageLength = Object.keys(this.storage).length; 
  return this.storageLength;
};










