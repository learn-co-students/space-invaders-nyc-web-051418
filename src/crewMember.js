let crewMemberId = 0;
class CrewMember {
  constructor(position){
    this.crewMemberId = ++crewMemberId;
    this.position = position;
    this.currentShip = "Looking for a Rig"
  };
  //
  // spacecurrentShip() {
  //   //find spacecurrentShip
  //
  // }


  //also if crewmember is a part of a crew
  chargePhasers() {
    if (this.position == "Gunner" && this.currentShip != "Looking for a Rig") {
      this.currentShip.chargePhasers = "Charged"
    } else {
      return "had no effect";
    };
  };

  engageWarpDrive() {
    if (this.position == "Pilot" && this.currentShip != "Looking for a Rig") {
      this.currentShip.warpDrive = "Engaged"
    }  else {
      return "had no effect";
    };
  };

  setsInvisibility() {
    if (this.position == "Defender" && this.currentShip != "Looking for a Rig") {
      this.currentShip.cloaked = true
    } else {
      return "had no effect";
    };
  };

};
