var SVG = require("barcode-renderer-svg")
var C39 = require("code-39-encoder")
var C128 = require("code-128-encoder")
var GEN = require("node-barcode-generator")
var express = require('express');
var app = express();

app.set('view engine', 'pug');

var gen = new GEN({encoder: new C128(),renderer: new SVG()})
function pad(num, size) {
    var s = "00000000000" + num;
    return s.substr(s.length-size);
}

app.get('/:start', function (req, res) {
  res.render('index', {pad:pad,barcode:gen.render,start:req.params.start})
})


app.listen(10101, function () {
  console.log('listening on port 10101!');
});
