class Spaceship {

  constructor(name, crew, phasers, shields, warpDrive = "disengaged") {

    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = warpDrive;

    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }

    this.crew.forEach (member => member.currentShip = this)

    this.phasersCharge = "uncharged";
  }



}
