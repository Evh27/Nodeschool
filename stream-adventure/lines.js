var split = require('split')
  , through = require('through')
  , lines = 0

process.stdin
  .pipe(split())
  .pipe(through(function (line) {
    line = line.toString()

    if (lines % 2 === 0)
      this.queue(line.toLowerCase() + '\n')
    else
      this.queue(line.toUpperCase() + '\n')

    lines++
  }))
  .pipe(process.stdout)
