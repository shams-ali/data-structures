var Queue = function() {
  //create a storage for the values
  this.valuesStored = {};
  //create a counter to track dequeues
  this.countDeq = 0;
  //create a counter to track enqueues
  this.countEnq = 0;
  //create a counter to track length of current queue
  this.queuelength = 0;
};

Queue.prototype.enqueue = function(value) {
  //add item to queue at countEnq
  this.valuesStored[this.countEnq] = value;
  //increment the size
  this.queuelength++;
  //increment the enqueuekey
  this.countEnq++;
};

Queue.prototype.dequeue = function() {
  //if length of queue is > 0 then
  if (this.queuelength > 0) {

    //remember the item to remove
    var currQueueValue = this.valuesStored[this.countDeq];
    //remove item at dequeuekey
    delete this.valuesStored[this.countDeq];
    //increment at keyDequeue to remember where to dequeue on next call
    this.countDeq++;
    //decrement length
    this.queuelength--;
    //return the remembered item
    return currQueueValue;
  }
};

Queue.prototype.size = function() {
  //return length property
  return this.queuelength;
};



// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//
// //create  base object with basic properties
//
//   this.storage = {};
//   this.storageLength = Object.keys(this.storage).length;
//
// };
//
// //add methods to method object
// Queue.prototype.enqueue = function(value) {
//   if (this.storageLength === undefined) {
//     this.storage[0] = value;
//   } else {
//     this.storage[this.storageLength] = value;
//   }
//   this.storageLength = Object.keys(this.storage).length;
// };
//
// Queue.prototype.dequeue = function() {
//   var res = this.storage[0];
//   delete this.storage[0];
//   //update storage object with new key
//   //subtract current key - 1
//
//   //for in loop over object
//   //storage[+(key)-1] = object[key]
//   for (var key in this.storage) {
//     this.newKey = +key - 1;
//     this.storage[this.newKey] = this.storage[key];
//     delete this.storage[key];
//   }
//   this.storageLength = Object.keys(this.storage).length;
//   return res;
// };
//
// Queue.prototype.size = function() {
//   this.storageLength = Object.keys(this.storage).length;
//   return this.storageLength;
// };
//
//
