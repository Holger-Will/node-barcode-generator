var enc = require("code-39-encoder")
var enc2 = require("code-128-encoder")
var enc3 = require("2of5-interleaved-encoder")
var svg = require("barcode-renderer-svg")
var Generator = require("../")
var assert = require('chai').assert
var should = require('chai').should()
var Encoder = new require("../")
describe('barcode-generator', function() {
  it('should encode Strings', function () {
    var gen = new Generator({encoder:new enc(),renderer:new svg()})
    var out=gen.render("Barcode",{width:300,height:200,baseline:30})
  })
  it('should encode Strings', function () {
    var gen = new Generator({encoder:new enc2(),renderer:new svg()})
    var out=gen.render("Barcode",{width:300,height:200,baseline:0,withNumbers:false})
  })
  it('should encode Strings', function () {
    var gen = new Generator({encoder:new enc3(),renderer:new svg()})
    var out=gen.render("1234",{width:300,height:200,baseline:30,withNumbers:true})
    console.log(out)
  })
});
