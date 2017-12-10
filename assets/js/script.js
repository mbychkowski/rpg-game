// Random function generator
function randomGenerator(minValue, maxValue) {
  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}

// Generate character
function generateCharacter(characterObject) {
  var characterHolder = $('<div>');
  characterHolder.addClass('dropdown');

  var newButton = $('<button>');
  newButton.addClass('btn btn-secondary dropdown-toggle');
  newButton.attr('type', 'button');
  newButton.attr('id', 'dropdownMenuButton');
  newButton.attr('data-toggle', 'dropdown');
  newButton.attr('aria-haspopup', 'true');
  newButton.attr('aria-expanded', 'false');

  // GENERALIZE THIS
  var newImg = $('<img src="assets/images/luke-skywalker.jpg" alt="[skywalker]" width="160px" height="220px">');

  var newDropMenu = $('<div>');
  newDropMenu.addClass('dropdown-menu');
  newDropMenu.attr('aria-labelledby', 'dropdownMenuButton');

  var newAttackItem = $('<a>');
  newAttackItem.addClass('dropdown-item');
  newAttackItem.append('jedi bash'); // GENERALIZE THIS

  newDropMenu.append(newAttackItem);
  newButton.append(newImg);

  characterHolder.append(newDropMenu);
  characterHolder.append(newButton);

  $('#hero-space').append(characterHolder);
}
