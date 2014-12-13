var q = require('q')
  , defer = q.defer();

function attachTitle(name) {
  return 'DR. ' + name
}

defer.promise.
  then(attachTitle).
  then(console.log);

defer.resolve('MANHATTAN')
