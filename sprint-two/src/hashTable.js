

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.hash = [];
  this.hash.length = this._limit;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newArray = [];
  newArray.push([k, v]);
  if (!Array.isArray(this.hash[index])) {
    this.hash[index] = newArray;
  } else if ( _.contains (this.hash[index][0], k)) {
    this.hash[index] = newArray;
  } else {
    this.hash[index].push([k, v]);
  }


  //console.log(this.hash);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this.hash[index].length; i++) {
    if (this.hash[index][i][0] === k) {
      return this.hash[index][i][1];
    }
  }
  //return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.hash[index][0] = [];
};

var hashTable = new HashTable();


/*
 * Complexity: What is the time complexity of the above functions?
 */
