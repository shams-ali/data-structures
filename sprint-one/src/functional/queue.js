var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var len = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[len] = value;
    len--;
    length++;
  };

  someInstance.dequeue = function() {
    len++;
    length--;
    var res = storage[length + len];
    return res;
  };

  someInstance.size = function() {
    return length > 0 ? length : 0;
  };

  return someInstance;
};
