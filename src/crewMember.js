let crewMemberId = 0;
let stores = {
  crewMembers: [],
  ships: []
}

class CrewMember {
  constructor(position) {
    this.position = position;
    this.id = ++crewMemberId;
    this.shipID;

    stores.crewMembers.push(this);
  }
    currentShip() {
      let that = this;
      if (this.shipID){ this.currentShip = stores.ships.find(function(ship){ return ship.id === that.shipID})
    } else { this.currentShip =  'Looking for a Rig'}

    }
    chargePhasers() {
      if (this.shipID && this.position === 'gunner') {
        this.currentShip.warpDrive = true;

      } else {
        return  "had no effect"
      }

}
    engageWarpDrive() {
      if (this.shipID && this.position ==='pilot') {
        this.currentShip.warpDrive = 'engaged';
      } else {
        return  "had no effect"
      }

}
    setsInvisibility() {
      if (this.shipID && this.position ==='defender' ) {
           this.currentShip.cloaked = true;
      } else {
        return  "had no effect"
      }

}
}
