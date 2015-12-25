var express = require('express');
var path = require('path');
var app = express();
var rootpath = path.normalize(__dirname + '/../');


app.use(express.static(rootpath));
//app.use(express.static(__dirname + '/'));

app.listen(8080);
console.log('Listening on port 8080...'); 