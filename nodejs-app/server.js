<<<<<<< HEAD
var createError = require("http-errors");
=======
var createError = require('html-errors");
>>>>>>> 1cee45b457da745eab4d7fc2d372a06b4580e888

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

