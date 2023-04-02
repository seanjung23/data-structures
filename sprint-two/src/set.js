// Time Complexity: Constant
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me

  return set;
};

var setPrototype = {};

// Time Complexity: Constant
setPrototype.add = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return;
  }

  this._storage[item] = item;
};

// Time Complexity: Constant
setPrototype.contains = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return true;
  }

  return false;
};

// Time Complexity: Constant
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */