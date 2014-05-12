var http = require('http');
var concat = require('concat-stream');

var args = process.argv.slice(2);
var results = [];
var returned = 0;

args.forEach(function(url, i) {

  http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(concat(function(data) {
      results[i] = data;
      returned++;
      if(returned === args.length)
        printResults();
    }));
  });

});

function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}