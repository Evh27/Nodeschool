var duplexer = require('duplexer')
  , through = require('through')

module.exports = function (counter) {
  var countries = {}

  function write(data) {
    countries[data.country] = 1 + (countries[data.country] || 0)
  }

  function end() {
    counter.setCounts(countries)
  }

  return duplexer(through(write, end), counter)
}