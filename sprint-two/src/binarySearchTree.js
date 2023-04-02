// Time Complexity: Constant
var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = {};
  newTree.right = {};

  return newTree;
};

// Time Complexity: Logarithmic
BinarySearchTree.prototype.insert = function(value) {
  var helper = function(subTree) {
    var currentValue = subTree.value;

    if (currentValue === undefined) {
      subTree.value = value;
      subTree.left = {};
      subTree.right = {};
    } else if (currentValue > value) {
      helper(subTree.left);
    } else if (currentValue < value) {
      helper(subTree.right);
    }
  };

  helper(this);
};

// Time Complexity: Logarithmic
BinarySearchTree.prototype.contains = function(target) {
  var isFound = false;

  var helper = function(subTree) {
    var currentValue = subTree.value;

    if (currentValue === target) {
      isFound = true;
    }
    if (currentValue > target) {
      helper(subTree.left);
    } else if (currentValue < target) {
      helper(subTree.right);
    }
  };

  helper(this);
  return isFound;
};

// Time Complexity: Linear
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var helper = function(node) {
    node.value = cb(node.value);

    if (node.left.value !== undefined) {
      helper(node.left);
    }
    if (node.right.value !== undefined) {
      helper(node.right);
    }
  };

  helper(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
