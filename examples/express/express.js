var express = require('express');
var app = express();
app.set('view engine', 'pug');
var enc1 = require("code-39-encoder")
var enc2 = require("code-128-encoder")
var enc3 = require("2of5-interleaved-encoder")
var svg = require("barcode-renderer-svg")

var Generator = require("../../")

var options={pretty:true}

app.get('/', function (req, res) {
  var gen1 = new Generator({encoder:new enc1(),renderer:new svg()})
  var gen2 = new Generator({encoder:new enc2(),renderer:new svg()})
  var gen3 = new Generator({encoder:new enc3(),renderer:new svg()})
  res.render('index', {filters:{barcode1:gen1.render,barcode2:gen2.render,barcode3:gen3.render}, title: 'Hey', message: 'Hello there!'});
});

app.listen(3009, function () {
  console.log('listening on port 3000!');
});
