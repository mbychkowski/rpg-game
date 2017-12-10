LukeSkywalker();
Stormtrooper();

var playerOpt1 = new LukeSkywalker();
var enemy = new Stormtrooper();

$(document).ready(function() {

  // Generate hero selected on click
  heroPartyMembers = randomGenerator(playerOpt1.party[0], playerOpt1.party[1]);
  villainPartyMembers = randomGenerator(enemy.party[0], enemy.party[1])

  for (var i = 0; i < heroPartyMembers; i++) {
    generateCharacter(playerOpt1);
  }

  for (var j = 0; j < villainPartyMembers; j++) {
    generateCharacter(enemy);
  }

});
