// Random function generator
function randomGenerator(minValue, maxValue) {
  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}

// Select character cards for player to choose
function generateHeroSelect(characterObject) {
  var heroSelect = $('<button>');

  heroSelect.addClass('game-hero m-3');
  heroSelect.attr('data-characterID', characterObject.characterNumber);

  var imgSrc = '<img src="' + characterObject.profile[0] + '" alt="' +
    characterObject.name + '" ' + "width=" + characterObject.profile[1] + " height=" + characterObject.profile[2] + '>';
  var newImg = $(imgSrc);

  heroSelect.append(newImg);

  $('#choose-hero').append(heroSelect);
}

// Generate character card in game play
function generateGameCharacters(characterObject) {

  var characterHolder = $('<div>');
  characterHolder.addClass('dropdown m-2');

  characterHolder.attr('data-name', characterObject.name);
  characterHolder.attr('data-health', characterObject.healthPower);
  characterHolder.attr('data-power', characterObject.attackPower);
  characterHolder.attr('data-allegiance', characterObject.allegiance);

  if (characterObject.allegiance === 'hero') {
    characterHolder.addClass('jedi');
  } else {
    characterHolder.addClass('enemy');
  }

  var newButton = $('<button>');
  newButton.addClass('btn dropdown-toggle');

  if (characterObject.allegiance === 'hero') {
    newButton.addClass('btn-secondary');
  } else {
    newButton.addClass('btn-dark');
  }

  newButton.attr('type', 'button');
  newButton.attr('id', 'dropdownMenuButton');
  newButton.attr('data-toggle', 'dropdown');
  newButton.attr('aria-haspopup', 'true');
  newButton.attr('aria-expanded', 'false');

  var imgSrc = '<img src="' + characterObject.profile[0] + '" alt="' +
    characterObject.name + '" ' + "width=" + characterObject.profile[1] + " height=" + characterObject.profile[2] + '>';
  var newImg = $(imgSrc);

  var newDropMenu = $('<div>');
  newDropMenu.addClass('dropdown-menu');
  newDropMenu.attr('aria-labelledby', 'dropdownMenuButton');

  for (var i = 0; i < characterObject.attacks.length; i++) {
    var newAttackItem = $('<button>');
    newAttackItem.addClass('dropdown-item');

    if (characterObject.allegiance === 'hero') {
      newAttackItem.addClass('jedi-attack');
    } else {
      newAttackItem.addClass('enemy-attack');
    }

    newAttackItem.attr("data-attack", i);
    newAttackItem.append(characterObject.attacks[i]);
    newDropMenu.append(newAttackItem);
  }

  newButton.append(newImg);
  characterHolder.append(newButton);

  characterHolder.append(newDropMenu);

  if (characterObject.allegiance === 'hero') {
    $('#hero-space').append(characterHolder);
  } else {
    $('#enemy-space').append(characterHolder);
  }
}
