var express = require('express')
  , fs = require('fs')
  , app = express()

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], function (err, file) {
    if (err) return res.send(500)
    try {
      res.json(JSON.parse(file))
    } catch (err) {
      res.send(500)
    }
  })
})

app.listen(process.argv[2])
