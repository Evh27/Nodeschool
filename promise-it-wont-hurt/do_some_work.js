var HTTP = require('q-io/http')

HTTP.read('http://localhost:7000').
  then(function (buf) {
    return HTTP.read('http://localhost:7001/' + buf.toString())
  }).
  then(function (buf) {
    console.log(JSON.parse(buf.toString()))
  }).
  then(null, console.error).
  done()
