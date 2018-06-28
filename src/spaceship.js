let spaceshipID = 0;

class Spaceship {
  constructor(name,crew,phasers,shields){
    this.id   = ++spaceshipID;
    let that = this;
      crew.forEach(function(c){ c.shipID = that.id; })
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged'
      if (this.crew.length > 0){ this.docked = false;} else { this.docked = true; }
    this.phasersCharge = 'uncharged'
    stores.ships.push(this);

  }
  




}
