// Time Complexity: Constant
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Time Complexity: Linear
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];

  if (bucket === undefined) {
    this._storage.set(index, LinkedList());
    bucket = this._storage.get(index);
    bucket.addToTail(tuple);

    return;
  } else {
    bucket = this._storage.get(index).head;

    while (bucket !== null) {
      if (bucket.value[0] === k) {
        bucket.value[1] = v;

        return;
      }

      bucket = bucket.next;
    }

    bucket = this._storage.get(index);
    bucket.addToTail(tuple);
  }
};

// Time Complexity: Linear
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index).head;

  while (bucket !== null) {
    if (bucket.value[0] === k) {
      return bucket.value[1];
    }

    bucket = bucket.next;
  }
};

// Time Complexity: Linear
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var node = this._storage.get(index).head;

  while (node !== null) {
    if (node.value[0] === k) {
      bucket.deleteNode(node.value);
    }

    node = node.next;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */