class CrewMember {
    constructor (position, name, currentShip = 'Looking for a Rig') {
      this.name = name
      this.position = position
      this.currentShip = currentShip
    }

    engageWarpDrive(){
      if (this.currentShip === 'Looking for a Rig') {
          return 'had no effect'
      }
    }

    setsInvisibility() {
      if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender' ) {
          return 'had no effect'
      } else {
        this.currentShip.cloaked = !this.currentShip.cloaked
      }

    }

    chargePhasers() {
      if (this.currentShip === 'Looking for a Rig') {
          return 'had no effect'
      }

    }
}
