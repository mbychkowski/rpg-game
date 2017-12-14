// Why do i have to do this???
LukeSkywalker();
Stormtrooper();
ObiWanKenobi();

var playerOpt1 = new LukeSkywalker();
var playerOpt2 = new ObiWanKenobi();
// Add to this array when putting in new character object
var playerArr = [playerOpt1, playerOpt2];

var enemy = new Stormtrooper();

// Prepare characters that can be selected for play
function prepareHeros() {
  for (var i = 0; i < playerArr.length; i++) {
    generateHeroSelect(playerArr[i]);
  }
}

$('#new-game').on('click', function() {
  $('#choose-hero').empty();
  $('#hero-space').empty();
  $('#enemy-space').empty();
  $('#jedi-battle-text').empty();
  $('#enemy-battle-text').empty();

  prepareHeros();
  setGame();
});

function setGame() {

  // Send character choice to gameboard. Start game.
  $('.game-hero').on('click', function() {

    // Choose hero
    var gameHeroID = $(this).attr('data-characterID');
    var gameHeroObject = playerArr[gameHeroID];
    generateGameCharacters(gameHeroObject);

    // Generate enemies
    var enemyPartySize = randomGenerator(enemy.party[0], enemy.party[1])
    for (var i = 0; i < enemyPartySize; i++) {
      var enemyObjects = [];
      enemyObjects.push(enemy);
      generateGameCharacters(enemy);
    }

    $('.jedi-attack').on('click', function() {

      var heroHitPoints = gameHeroObject.heroAttack();

      var targetEnemy = document.querySelector('.enemy');
      var userHero = document.querySelector('.jedi');

      targetEnemy.dataset.health -= heroHitPoints;
      $('#enemy-battle-text').empty();
      $('#jedi-battle-text').text(userHero.dataset.name + ' hit ' + targetEnemy.dataset.name + ' for ' + heroHitPoints + ' hit points!');

      if (targetEnemy.dataset.health < 0) {
        $(targetEnemy).remove()
        enemyPartySize--;
      }

      // enemy battle sequence function
      function enemyBattleSequence () {
        $('#jedi-battle-text').empty();
        var enemyHitPoints = enemy.enemyAttack();
        userHero.dataset.health -= enemyHitPoints;
        $('#enemy-battle-text').text(targetEnemy.dataset.name + ' hit ' + userHero.dataset.name + ' for ' + enemyHitPoints + ' hit points.');
      }

      for (var i = 0; i < enemyPartySize; i++) {
        var delayAdd = 2000 + (i * 2500);
        var battleDelay = setTimeout(enemyBattleSequence, delayAdd);
      }

      if (userHero.dataset.health < 0) {
        $(userHero).remove()
        alert('Your feeble skills are no match for the power of the dark side.')
      }

      var isEmpty = $('#enemy-space').is(':empty');
      if (isEmpty)
        alert('The force is strong with this one.')
    });

    $(this).remove();

  });
}
