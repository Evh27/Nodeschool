var fs = require('fs');
var path = require('path');

var args = process.argv.slice(2);

fs.readdir(args[0], function(err, list) {
  list.filter(function(filename) {
    return path.extname(filename).slice(1) === args[1];
  })
  .forEach(function(file) {
    console.log(file);
  });
});