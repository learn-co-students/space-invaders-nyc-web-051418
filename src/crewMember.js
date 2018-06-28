class CrewMember {

  constructor(position,currentShip) {
    this.position = position;
    if (currentShip) {
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
    }
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'; 
    }
  }


}
