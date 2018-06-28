class Spaceship {

  constructor(name,crew,phasers,shields) {
    // debugger;
    this.name = name;
    this.crew=crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked=false;
    this.warpDrive="disengaged";
    if (crew.length === 0){
      this.docked = true
      // debugger;
    }else {
      this.docked = false

      crew.forEach(function (crew) {
        return crew.currentShip = this

      }.bind(this))
          // debugger;
    }

    this.phasersCharge="uncharged"

    // debugger;
  }


}
