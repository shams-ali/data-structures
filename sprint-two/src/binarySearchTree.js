var BinarySearchTree = function(value) {

  newBST = {};
  newBST.value = value;
  newBST.right = null;
  newBST.left = null;
  _.extend(newBST, bstMethods);
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);

  if (value < this.value ) { //this.value = 5 //value.left = 2 //value.left.right = 3
    console.log(!!this.left);
    if (!!this.left) {
      //debugger;
      this.left.insert(value);
    } else {
      this.left = newNode;
    }
  } else {
    if (!!this.right) {
      this.right.insert(value);
    } else {
      this.right = newNode;
    }
  }
  console.log(this);

};

bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value && !!this.left ) {
    return this.left.contains(value);
  } else if (value > this.value && !!this.right) {
    return this.right.contains(value);
  }

  return false;



};

bstMethods.depthFirstLog = function(fun) {
  fun(this.value);
  if (!!this.left) {
    this.left.depthFirstLog(fun);
  }
  if (!!this.right) {
    this.right.depthFirstLog(fun);
  }
};
console.log('hi');
/*
 * Complexity: What is the time complexity of the above functions?
 */
//var binarySearchTree = BinarySearchTree();
