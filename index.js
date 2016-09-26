"use strict";
(function() {
  var root = this
  var previous_BarcodeGenerator = root.BarcodeGenerator
  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = BarcodeGenerator
    }
    exports.BarcodeGenerator = BarcodeGenerator
  }
  else {
    root.BarcodeGenerator = BarcodeGenerator
  }
  BarcodeGenerator.noConflict = function() {
    root.BarcodeGenerator = previous_BarcodeGenerator
    return BarcodeGenerator
  }
}).call(this);


function BarcodeGenerator(opt){
  this.buffer= null
  this.opt=opt

  this.render=function(input,options){
    var res = this.opt.encoder.encode(input,{output:"all"})
    options.text=input
    return this.opt.renderer.render(res,options)
  }.bind(this)

}
