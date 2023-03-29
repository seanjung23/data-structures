var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this.key++;
  this.storage[this.key] = value;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.key;
};