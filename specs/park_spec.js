var assert = require( "assert" );
var Park = require( "../park.js" );
var Dinosaur = require( "../dinosaur.js" )

describe( "Park", function() {

  var park;
  var dinosaur1;
  beforeEach( function() {
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 6);
  });

  it( "Enclosure should start empty", function() {
    assert.strictEqual( park.enclosures.length, 0 );
  } )

  it( "Enclosure can add a Dinosaur", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual( park.enclosures.length, 1);
  })

  it("Remove dinosaur of a certain type", function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaurOfType("Tyrannosaurus");
    assert.strictEqual(park.enclosures.length, 0);
  })

  it("All dinosaurs with an offspring of 2+", function(){
    park.addDinosaur(dinosaur1);
    console.log("in the park", park)
    park.dinosaurWithOffspringOfTwo(2);
    assert.strictEqual(park.enclosures.length, 1);
  })



} )