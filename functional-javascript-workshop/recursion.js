function reduce(arr, fn, initial) {
  var head = arr[0];
  var tail = arr.slice(1);
  var val = fn(initial, head, 0, arr);
  if(tail.length)
    return reduce(tail, fn, val);
  else
    return val;
}

module.exports = reduce;