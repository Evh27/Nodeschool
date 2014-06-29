var trumpet = require('trumpet')
  , tr = trumpet()
  , through = require('through')

tr.pipe(process.stdout)

var loud = tr.select('.loud').createStream()

loud.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase())
}, function () {
  this.queue(null)
}))
.pipe(loud)

process.stdin.pipe(tr)
