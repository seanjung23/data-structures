// Time Complexity: Constant
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  // Time Complexity: Constant
  list.addToTail = function(value) {
    var node = Node(value);

    if (list.head === null) {
      list.head = node;
      list.tail = node;
      list.size++;
    } else {
      list.tail.next = node;
      list.tail = node;
      list.size++;
    }
  };

  // Time Complexity: Constant
  list.removeHead = function() {
    if (list.head === null) {
      return list.head;
    }
    var removeNode = list.head;
    list.head = list.head.next;
    list.size--;

    return removeNode.value;
  };

  // Time Complexity: Linear
  list.deleteNode = function(target) {
    var prevNode = list.head;
    if (prevNode.value === target) {
      return list.removeHead();
    }
    var node = list.head.next;

    while (node !== null) {
      if (node.value === target) {
        prevNode.next = node.next;
        list.size--;

        return;
      }
      prevNode = node;
      node = node.next;
    }
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