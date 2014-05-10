var filterByExt = require('./module');

var args = process.argv.slice(2);

filterByExt(args[0], args[1], function(err, list) {
  if(err) {
    console.log('There was a problem :(');
    return;
  }

  list.forEach(function(file) {
    console.log(file);
  });
});