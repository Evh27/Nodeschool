var combine = require('stream-combiner')
  , split = require('split')
  , through = require('through')
  , zlib = require('zlib')

module.exports = function () {
  var genre

  return combine(
    split(),
    through(function(json) {
      if(json) {
        var data = JSON.parse(json)
        if (data.type === 'genre') {
          if (genre) {
            this.queue(JSON.stringify(genre) + '\n')
          }
          genre = { name: data.name, books: [] }
        } else if (data.type === 'book') {
          genre.books.push(data.name)
        }
      }
    }, function () {
      this.queue(JSON.stringify(genre) + '\n')
      this.queue(null)
    }),
    zlib.createGzip()
  )
}
