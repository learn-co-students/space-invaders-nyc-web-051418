let spaceshipId = 0;

class Spaceship {

  constructor (name, crew, phasers, shields, cloaked = false, warpDrive = `disengaged`, docked, phasersCharge = `uncharged`){
    this.spaceshipId = ++spaceshipId;
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    crew.length == 0 ? this.docked = true : this.docked = false;
    this.phasersCharge = phasersCharge;
    this.hireCrewMember()
  };

   hireCrewMember (crew){
     this.crew.forEach(function(member){
       member.currentShip = this
     }.bind(this));
   };



}
