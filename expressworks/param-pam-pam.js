var express = require('express')
  , crypto = require('crypto')
  , app = express()

app.put('/message/:id', function (req, res) {
  var encryptedId =
    crypto.
      createHash('sha1').
      update(new Date().toDateString() + req.params.id).
      digest('hex')

  res.end(encryptedId)
})

app.listen(process.argv[2])
