function duckCount() {
  return Array.prototype.slice.call(arguments).
    filter(function(arg) {
      return Object.prototype.hasOwnProperty.call(arg, 'quack');
    }).length;
}

module.exports = duckCount;