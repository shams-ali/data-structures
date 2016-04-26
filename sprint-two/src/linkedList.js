/*
// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;
//
//   list.addToTail = function(value) {
//
//     // create newNode(value)
//
//     var newNode = new Node (value);
//
//     // if (tail === null) head and tail === newNode
//     if (list.tail === null) {
//       list.head = newNode;
//       list.tail = newNode;
//     } else {
//       list.tail.next = newNode;
//       list.tail = newNode;
//     }
//     //else tail.next = newNode
//
//     //tail === newNode
//
//
//   };
//
//   list.removeHead = function() {
//
//     var currentHead = list.head.value;
//
//     list.head = list.head.next;
//
//     return currentHead;
//
//
//
//   };
//
//   list.contains = function(target, node) {
//     node = node || list.head;
//     // check if node.value is equal to target
//       // if so, return true
//     if (node.value === target) {
//       return true;
//     }
//     // check if the next property is an object
//       // if so, recurse with (target, node.next)
//     return node.next ? list.contains(target, node.next) : false;
//   };
//
//   return list;
// };
//
// var Node = function(value) {
//   var node = {};
//
//   node.value = value;
//   node.next = null;
//
//   return node;
// };
//
// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

var LinkedList = function() {
  var listObj = {};
  listObj.head = null;
  listObj.tail = null;

  listObj.addToTail = function (value) {
    //if the tail is emptY...link tail to value...link head to value
    //this.tail = value;
    var newNode = new Node(value);
    !listObj.tail ? listObj.head = newNode : listObj.tail.next = newNode;
    this.tail = newNode;
     //if not empty
      //link old node to new node
    //link tail to neW node with new value

  };

  listObj.removeHead = function () {
    //if head is not empty
    if (!!listObj.head) {
      //rememeber old head value to return at end
      var removed = listObj.head.value;
      //make link from head to head current head nodes next
      listObj.head = listObj.head.next; //link from head to old node is overrided
      //return removed head value;
      return removed;
    }

  };

  listObj.contains = function(value) {
    //check if current node has the value
    var objToCheck = arguments[1] || listObj.head;
    if (objToCheck.value === value) {
      return true;
    }
    return objToCheck.next ? listObj.contains(value, objToCheck.next) : false;
    //RECURSION
  };
  return listObj;
};
var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

linkedList = LinkedList();
linkedList.addToTail(4);
linkedList.addToTail(5);
//linkedList.addToTail(6);
console.log(linkedList.contains(6));
console.log(linkedList);


/*var LinkedList = function() {
  var instance = {};
  instance.head = null;
  instance.tail = null;

  instance.addToTail = function(node) {
    var newTail = Node(node);
    if(!instance.head) {
      instance.head = newTail;
    } else if(instance.tail) {
      instance.tail.next = newTail;
    }
    instance.tail = newTail;
  };

  instance.contains = function(target) {
    var node = arguments[1] || instance.head;
    if (node.value === target) {
      return true;
    } else if (node.next) {
      return instance.contains(target, node.next);
    }
    return false;
  };

  instance.removeHead = function() {
    var popped = instance.head.value;
    newList = instance.head.next;
    delete instance.head;
    instance.head = newList;
    return popped;
  };
  return instance;
};

var Node = function(val) {
  var node = {};
  node.value = val;
  node.next = null;
  return node;
};*/
