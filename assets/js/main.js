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

    var enemnyPartyMembers = randomGenerator(enemy.party[0], enemy.party[1])
    for (var i = 0; i < enemnyPartyMembers; i++) {
      var enemyObjects = [];
      enemyObjects.push(enemy);
      generateGameCharacters(enemy);
    }

    // CLICK EVENTS TO DEAL DAMAGE
    $('.jedi-attack').on('click', function() {
      var heroHitPoints = gameHeroObject.heroAttack();

      var targetEnemy = document.querySelector('.enemy');
      var userHero = document.querySelector('.jedi');

      targetEnemy.dataset.health -= heroHitPoints;
      alert(userHero.dataset.name + ' hit ' + targetEnemy.dataset.name + ' for ' + heroHitPoints + ' hit points!');

      if (targetEnemy.dataset.health < 0) {
        $(targetEnemy).remove()
        enemnyPartyMembers--;
      }

      for (var i = 0; i < enemnyPartyMembers; i++) {
        var enemyHitPoints = enemy.enemyAttack();
        userHero.dataset.health -= enemyHitPoints;
        alert(targetEnemy.dataset.name + ' hit ' + userHero.dataset.name + ' for ' + enemyHitPoints + ' hit points.');
      }

      if (userHero.dataset.health < 0) {
        $(userHero).remove()
        alert('You lose. Refresh to play again.')
      }

    });
  });
});
