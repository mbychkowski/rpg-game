// Random function generator
function randomGenerator(minValue, maxValue) {
  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}

// Generate character card
function generateCharacter(characterObject) {
  var characterHolder = $('<div>');
  characterHolder.addClass('dropdown m-2');

  var newButton = $('<button>');
  newButton.addClass('btn btn-secondary dropdown-toggle');
  newButton.attr('type', 'button');
  newButton.attr('id', 'dropdownMenuButton');
  newButton.attr('data-toggle', 'dropdown');
  newButton.attr('aria-haspopup', 'true');
  newButton.attr('aria-expanded', 'false');

  imgSrc = '<img src="' + characterObject.profile[0] + '" alt="' +
    characterObject.name + '" ' + "width=" + characterObject.profile[1] + " height=" + characterObject.profile[2] + '>';
  var newImg = $(imgSrc);

  var newDropMenu = $('<div>');
  newDropMenu.addClass('dropdown-menu');
  newDropMenu.attr('aria-labelledby', 'dropdownMenuButton');

  for (var i = 0; i < characterObject.attacks.length; i++) {
    var newAttackItem = $('<a>');
    newAttackItem.addClass('dropdown-item');
    newAttackItem.attr("data-attack", i);
    newAttackItem.append(characterObject.attacks[i]);
    newDropMenu.append(newAttackItem);
  }

  newButton.append(newImg);

  characterHolder.append(newDropMenu);
  characterHolder.append(newButton);

  if (characterObject.allegiance === 'hero') {
    $('#hero-space').append(characterHolder);
  } else {
    $('#villain-space').append(characterHolder);
  }
}
