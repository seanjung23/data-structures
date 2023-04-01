// Time Complexity: Constant
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Time Complexity: Constant
treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

// Time Complexity: Linear
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  var isTarget = false;
  var findTarget = function(subTree) {

    subTree.forEach(function(item) {
      if (item.value === target) {
        isTarget = true;

        return;
      }
      if (item.children) {
        findTarget(item.children);
      }
    });
  };

  findTarget(this.children);

  return isTarget;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */