// Time Complexity: Constant
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Time Complexity: Constant
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  this.nodes[node].edges = {};
  this.nodes[node].value = node;
};
// Time Complexity: Linear
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  var isFound = false;

  for (var node in this.nodes) {
    if (this.nodes[node].value === target) {
      isFound = true;
    }
  }

  return isFound;
};

// Time Complexity: Linear
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var currentNode in this.nodes) {
    if (this.nodes[currentNode].value === node) {
      for (var connectedNode in this.nodes[currentNode].edges) {
        this.removeEdge(currentNode, connectedNode);
      }

      delete this.nodes[currentNode];
    }
  }
};

// Time Complexity: Constant
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edges.hasOwnProperty(toNode)) {
    return true;
  }

  return false;
};

// Time Complexity: Constant
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

// Time Complexity: Constant
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Time Complexity: Linear
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(this.nodes[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */