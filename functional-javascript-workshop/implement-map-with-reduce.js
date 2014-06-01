module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(mapped, elem) {
    mapped.push(fn(elem));
    return mapped;
  }, []);
};
