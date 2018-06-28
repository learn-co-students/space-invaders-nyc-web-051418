class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = !crew.length //true if crew is empty
    this.phasersCharge = 'uncharged'

    if (!!crew.length) {
      crew.forEach(
        function(member) {
          member.currentShip = this
        }.bind(this)
      )
    }
  }


}
