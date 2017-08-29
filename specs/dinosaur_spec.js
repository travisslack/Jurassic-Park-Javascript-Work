var assert = require( "assert" );
var Dinosaur = require( "../dinosaur.js")

describe( "Dinosaur", function() {
  var dinosaur;
  
  beforeEach( function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 5);
  });

  it( "dinosaur should have a type", function(){
    assert.strictEqual( dinosaur1.type, "Tyrannosaurus");
  });

  it( "dinosaur should have an amount of offspring", function(){ 
    assert.strictEqual(dinosaur1.offspring, 5);
  });





});