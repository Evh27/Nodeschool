var http = require('http')
  , fs = require('fs')
  , through = require('through')

function write (buf) {
  this.queue(buf.toString().toUpperCase())
}

function end () { this.queue(null) }

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  }
  else res.end('I\'m a POST, man')
});
server.listen(process.argv[2]);

