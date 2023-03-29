var Queue = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    key++;
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    if (key === 0) {
      return;
    } else {
      var firstOut = storage[1];
      delete storage[1];

      if (key > 1) {
        for (var i = 2; i <= key; i++) {
          var currentStorageValue = storage[i];
          var previousKey = i - 1;
          delete storage[i];
          storage[previousKey] = currentStorageValue;
        }
      }

      key--;
      return firstOut;
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};