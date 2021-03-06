
/*
// ------------------------
// Instantiate a new graph

var Graph = function() {
  this.vertices = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = [];
  //console.log(this.storage);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(Object.keys(this.vertices), node.toString());
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertices[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.vertices[fromNode], toNode);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].push(toNode);
  this.vertices[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.vertices[fromNode] = _.reject (this.vertices[fromNode], function(value) {
    return toNode === value;
  });
  this.vertices[toNode] = _.reject (this.vertices[toNode], function(value) {
    return fromNode === value;
  });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each (this.vertices, function(value, key, array) {
    cb(key);
  });
};

var graph = new Graph();
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */

 var Graph = function (value) {
   this.vertices = {};
 };

 Graph.prototype.addNode = function (node) {
   this.vertices[node] = this.vertices[node] || {edges: {}};
 };

 Graph.prototype.contains = function (node) {
   return !!this.vertices[node];
 };

 Graph.prototype.removeNode = function (node) {
   _.each(this.vertices[node].edges, function(value) {
     this.removeEdge(node, value);
   });
   delete this.vertices[node];

 };
 Graph.prototype.addEdge = function (fromNode, toNode) {
   this.vertices[fromNode].edges[toNode] = toNode;
   this.vertices[toNode].edges[fromNode] = fromNode;
 };
 Graph.prototype.hasEdge = function (fromNode, toNode) {
   return !!this.vertices[fromNode].edges[toNode];
 };
 Graph.prototype.removeEdge = function (fromNode, toNode) {
   delete this.vertices[fromNode].edges[toNode];
   delete this.vertices[toNode].edges[fromNode];
 };
 Graph.prototype.forEachNode = function (cb) {
   _.each (this.vertices, function(value, key) {
     cb(key);
   });
 };
