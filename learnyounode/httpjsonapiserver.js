var http = require('http');
var url = require('url');


var server = http.createServer(function (req, res) {

  var info;
  var route = url.parse(req.url, true);
  console.log(route);

  if(route.pathname == '/api/parsetime') {
    var date = new Date(route.query.iso);
    info = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  if(route.pathname == '/api/unixtime') {
    info = {
      unixtime: Date.parse(route.query.iso)
    };
  }

  if(info) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info));
  } else {
    res.writeHead(404);
    res.end();
  }

});

server.listen(Number(process.argv[2]));