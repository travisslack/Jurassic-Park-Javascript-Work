var Park = function() {
  this.enclosures = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosures.push(dinosaur);
}

Park.prototype.removeDinosaurOfType = function(type) {
  for(var i = 0; i < this.enclosures.length; i ++) {
    if (this.enclosures[i].type === type) {
      this.enclosures.splice(i, 1);
      // ask about this.
    }
  }

}

Park.prototype.dinosaurWithOffspringOfTwo = function(offspring) {
  var dinosaur = []
  for(var i = 0; i < this.enclosures.length; i ++) {
    if (this.enclosures[i].offspring >= offspring) {
        dinosaur.push(this.enclosures[i]);
    }
  }
  this.enclosures = dinosaur;
}





module.exports = Park;