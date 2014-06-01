function Spy(target, method) {
  var delegate = target[method];
  var count = 0;

  target[method] = function() {
    count++;
    return delegate.apply(this, arguments);
  };

  var spy = {};
  Object.defineProperty(spy, 'count', {
    get: function() {
      return count;
    }
  });
  return spy;
}

module.exports = Spy;