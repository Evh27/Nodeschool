var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extname, cb) {
  fs.readdir(dirname, function(err, list) {
    if(err)
      return cb(err);

    var files = list.filter(function(filename) {
      return path.extname(filename).slice(1) === extname;
    });

    return cb(null, files);
  });
};

