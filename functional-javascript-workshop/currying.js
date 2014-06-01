function curryN(fn, n) {
  n = n || fn.length;

  function curry(previous) {
    return function(arg) {
      var args = previous.concat(arg);

      if(args.length < n)
        return curry(args);
      else
        return fn.apply(this, args);
    };
  }

  return curry([]);
}

module.exports = curryN;