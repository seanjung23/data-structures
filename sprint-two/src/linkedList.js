// Time Complexity: Constant
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time Complexity: Constant
  list.addToTail = function(value) {
    var node = Node(value);

    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  // Time Complexity: Constant
  list.removeHead = function() {
    var head = list.head;

    if (head === null) {
      return;
    }
    list.head = head.next;

    return head.value;
  };

  // Time Complexity: Linear
  list.contains = function(target) {
    var node = list.head;

    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};

// Time Complexity: Constant
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */