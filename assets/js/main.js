// Why do i have to do this???

LukeSkywalker();
Stormtrooper();
ObiWanKenobi();

var playerOpt1 = new LukeSkywalker();
var playerOpt2 = new ObiWanKenobi();
var playerArr = [playerOpt1, playerOpt2];
console.log(playerArr);

var enemy = new Stormtrooper();

$(document).ready(function() {

  for (var i = 0; i < playerArr.length; i++) {
    generateHeroSelect(playerArr[i]);
  }

  var gameHero;
  $(".game-hero").on("click", function() {
    // Send character choice to gameboard. Start game

    gameHero = $(this).attr('data-character');
    console.log(gameHero);
    console.log(playerArr[gameHero]);
    
    generateGameCharacters(playerArr[gameHero]);
  });

  var villainPartyMembers = randomGenerator(enemy.party[0], enemy.party[1])
  for (var j = 0; j < villainPartyMembers; j++) {
    generateGameCharacters(enemy);
  }

  // CLICK EVENTS TO DEAL DAMAGE

});
