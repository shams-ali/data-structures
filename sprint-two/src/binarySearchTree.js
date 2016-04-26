/*var BinarySearchTree = function(value) {

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
//var binarySearchTree = BinarySearchTree();*/
//

/*var BinarySearchTree = function(val) {
  var tree = Object.create(treePrototype);
  tree.value = val;
  tree.right = null;
  tree.left = null;
  return tree;
};

treePrototype = {};
treePrototype.insert = function(val) {
  if(this.value > val) {
    if(this.left) {
      this.left.insert(val);
    } else {
      this.left = BinarySearchTree(val);
    }
  } else if(this.value < val) {
    if(this.right) {
      this.right.insert(val);
    } else {
      this.right = BinarySearchTree(val);
    }
  } else {
    return;
  }
};
treePrototype.contains = function(target) {
  if(this.value === target) {
    return true;
  } else if(this.left && this.value > target) {
    return this.left.contains(target);
  } else if(this.right && this.value < target) {
    return this.right.contains(target);
  } else {
    return false;
  }
};
treePrototype.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  } else if(this.right) {
    this.right.depthFirstLog(cb);
  }
};*/

var BinarySearchTree = function (value) {
  var tree = Object.create(treePrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var treePrototype = {};

treePrototype.insert = function (value) {
  if (value < this.value) {
    return this.left ? this.left.insert(value) : this.left = BinarySearchTree(value);
  } else if (value > this.value) {
    return this.right ? this.right.insert(value) : this.right = BinarySearchTree(value);
  }
};

treePrototype.contains = function (target) {
  if (target === this.value) {
    return true;
  }
  if (target < this.value && this.left) {
    return this.left.contains(target);
  }
  if (target > this.value && this.right) {
    return this.right.contains(target);
  }
  return false;
};

treePrototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

binarySearchTree = BinarySearchTree(5);
