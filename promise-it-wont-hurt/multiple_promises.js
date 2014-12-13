var q = require('q')
  , d1 = q.defer()
  , d2 = q.defer()

function all(p1, p2) {
  var defer = q.defer()
    , count = 0
    , counted = function () { count++ }
    , resolved = function () {
        if (count === 2) {
          defer.resolve(
            [ p1.inspect().value
            , p2.inspect().value
            ]
          )
        }
      }

  p1.
    then(counted).
    then(resolved).
    then(null, defer.reject).
    done()

  p2.
    then(counted).
    then(resolved).
    then(null, defer.reject).
    done()

  return defer.promise
}

all(d1.promise, d2.promise).
  then(console.log)

setTimeout(function () {
  d1.resolve('PROMISES')
  d2.resolve('FTW')
}, 200)
