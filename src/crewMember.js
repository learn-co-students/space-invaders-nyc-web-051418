class CrewMember {

  constructor(position,currentShip) {
    // const currentShip=new Spaceship()
    // debugger;
    this.position = position;
    if (currentShip) {
      // debugger;
      this.currentShip = currentShip;

    } else {
      this.currentShip = 'Looking for a Rig'
    }
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect';
    }
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect';
    }else{
      if (this.position === "Defender") {
          this.currentShip.cloaked = true
      }
      // debugger;
    }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect';
    }
  }


}
