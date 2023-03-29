var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.key = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.key++;
  this.storage[this.key] = value;
};

queueMethods.dequeue = function() {
  if (this.key === 0) {
    return;
  } else {
    var firstOut = this.storage[1];
    delete this.storage[1];

    if (this.key > 1) {
      for (var i = 2; i <= this.key; i++) {
        var currentStorageValue = this.storage[i];
        var previousKey = i - 1;
        delete this.storage[i];
        this.storage[previousKey] = currentStorageValue;
      }
    }

    this.key--;
    return firstOut;
  }
};

queueMethods.size = function() {
  return this.key;
};