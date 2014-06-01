function getDependencies(tree) {
  if(!tree.dependencies)
    return [];

  var deps = tree.dependencies;
  return Object.keys(deps).
    map(function(key) {
      var dep = deps[key];
      var id = key + '@' + dep.version;
      return [id].concat(getDependencies(dep));
    }).
    reduce(function(flat, elem) {
      elem.forEach(function(item) {
        if(notIn(flat, item))
          flat.push(item);
      });
      return flat;
    },
    []).sort();

  function notIn(array, item) {
    return array.indexOf(item) == -1;
  }
}

module.exports = getDependencies;