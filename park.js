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





module.exports = Park;