var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../static')));

// var fileName = path.join(__dirname, '../static');
// app.get('/', function (req, res) {
//   res.sendFile(fileName);
// });

// app.get('/', function (req, res) {
//   res.send('<html><head><title>ISS</title></head><body>Hello Again World!</body></html>');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


