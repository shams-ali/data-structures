/*
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);

};

setPrototype.contains = function(item) {
  return _.some (this._storage, function(value) {
    return value === item;
  });
};

setPrototype.remove = function(item) {
  this._storage = _.reject (this._storage, function(value) {
    return value === item;
  });
};
*/

var Set = function() {
  var created = Object.create(setMethods);
  return created;
};

var setMethods = {};

setMethods.add = function (value) {
  this[value] = value;
};

setMethods.contains = function (value) {
  return !!this[value];
};

setMethods.remove = function (value) {
  delete this[value];
};

var set = Set();
/*
 * Complexity: What is the time complexity of the above functions?
 */
