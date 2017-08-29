var Park = function() {
  this.enclosures = [];
}

Park.prototype.addDinosaur= function(dinosaur) {
  this.enclosures.push(dinosaur);
}





module.exports = Park;