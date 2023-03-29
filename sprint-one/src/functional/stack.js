var Stack = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    key++;
    storage[key] = value;
  };

  someInstance.pop = function() {
    if (key === 0) {
      return;
    } else {
      var top = storage[key];
      delete storage[key];
      key--;

      return top;
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
