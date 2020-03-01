var assert = require('better-assert');

describe('filter', function(){
  it('Should contain property object', function(){
    var list = require('../lib/index');
    assert(list.hasOwnProperty('object'));
  });

  it('Should contain property array', function(){
    var list = require('../lib/index');
    assert(list.hasOwnProperty('array'));
  });

  it('Should contain property regex', function(){
    var list = require('../lib/index');
    assert(list.hasOwnProperty('regex'));
  });
 
  it('Should contain property transformToLeet', function(){
    let list = require('../lib/index');
    assert(list.hasOwnProperty('transformToLeet'));
    let transformToLeet = list.transformToLeet;
    let original='tested phrase';
    let transformed = transformToLeet(original);
    assert(transformed === '+35+3|) |D#|2@53');
  });
});