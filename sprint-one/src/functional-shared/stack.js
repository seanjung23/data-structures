var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.key++;
  this.storage[this.key] = value;
};

stackMethods.pop = function() {
  if (this.key === 0) {
    return;
  } else {
    var top = this.storage[this.key];
    this.key--;

    return top;
  }
};

stackMethods.size = function() {
  return this.key;
};