var HTTP = require('q-io/http')
  , _ = require('lodash')
  , cacheUrl = 'http://localhost:7000'
  , dbUrl = 'http://localhost:7001'
  , buildUserUri = _.bind(String.prototype.concat, dbUrl, '/')
  , toString = function (buf) { return buf.toString() }

HTTP.read(cacheUrl).
  then(_.compose(HTTP.read, buildUserUri, toString)).
  then(_.compose(console.log, JSON.parse, toString)).
  then(null, console.error).
  done()
