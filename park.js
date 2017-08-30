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

// Park.prototype.dinosaurWithOffspringOfTwo = function(offspring) {
//   var dinosaurOffspring = []
//   for(var i = 0; i < this.enclosures.length; i ++) {
//     if (this.dinosaur [i].offspring === offspring) {
//       this.dinosaur.push(offspring);
//     }
//   }
//   this.dinosaur.length
// }





module.exports = Park;