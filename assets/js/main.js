// Why do i have to do this???

LukeSkywalker();
Stormtrooper();
ObiWanKenobi();

var playerOpt1 = new LukeSkywalker();
var playerOpt2 = new ObiWanKenobi();
var playerArr = [playerOpt1, playerOpt2];

var enemy = new Stormtrooper();

$(document).ready(function() {
  for (var i = 0; i < playerArr.length; i++) {
    generateHeroSelect(playerArr[i]);
  }

  $('.game-hero').on('click', function() {
    // Send character choice to gameboard. Start game
    var gameHeroID = $(this).attr('data-character');
    var gameHeroObject = playerArr[gameHeroID];
    generateGameCharacters(gameHeroObject);

    var villainPartyMembers = randomGenerator(enemy.party[0], enemy.party[1])
    for (var i = 0; i < villainPartyMembers; i++) {
      var villainObjects = [];
      villainObjects.push(enemy);
      generateGameCharacters(enemy);
    }

    // CLICK EVENTS TO DEAL DAMAGE
    $('.jedi-attack').on('click', function() {
      console.log('Something was clicked')
      var hitPoints = gameHeroObject.heroAttack();
      console.log('hit points: ', hitPoints);

      var targetEnemy = document.querySelector('.enemy')
      targetEnemy.dataset.health -= hitPoints;
      console.log(targetEnemy.dataset.health);

      if (targetEnemy.dataset.health < 0) {
        $(targetEnemy).remove()
      }

    });
  });
});
