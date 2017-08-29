var assert = require( "assert" );
var Park = require( "../park.js" );
var Dinosaur = require( "../dinosaur.js" )

describe( "Park", function() {

  var park;
  beforeEach( function() {
    park = new Park();
    // dinosaur1 = new Dinosaur("Tyrannosaurus", 6);
  });

  it( "Enclosure should start empty", function() {
    assert.strictEqual( park.enclosures.length, 0 );
  } )



} )