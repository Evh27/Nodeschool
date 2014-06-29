var tar = require('tar')
  , crypto = require('crypto')
  , through = require('through')
  , zlib = require('zlib')

var decipher = crypto.createDecipher(process.argv[2], process.argv[3])
var tarParser = tar.Parse()


tarParser.on('entry', function(entry) {
  if (entry.type === 'File') {
    entry.
      pipe(crypto.createHash('md5', { encoding: 'hex' })).
      pipe(through(null, function() {
        this.queue(' ' + entry.path + '\n')
      })).
      pipe(process.stdout)
  }
})

process.stdin.
  pipe(decipher).
  pipe(zlib.createGunzip()).
  pipe(tarParser)
