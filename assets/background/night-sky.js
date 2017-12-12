function randomGenerator(minValue, maxValue) {
  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}

var twinkleArr = ['twinkle1', 'twinkle2','twinkle3','twinkle4','twinkle5','twinkle6','twinkle7',];
function createStar() {
  var newStar = $('<div>');

  var random = randomGenerator(0, twinkleArr.length - 1);
  var randomTwinkle = twinkleArr[random];
  newStar.addClass('circle');
  newStar.addClass(randomTwinkle)

  var bottomLoc = randomGenerator(0, 100).toString();
  var leftLoc = randomGenerator(0, 100).toString();
  newStar.css('bottom', bottomLoc + '%');
  newStar.css('left', leftLoc + '%');

  var circleSize = randomGenerator(1, 6).toString();
  newStar.css('width', circleSize + 'px');
  newStar.css('height', circleSize + 'px');

  $('#night-sky').append(newStar);
}

for (var i = 1; i < 201; i++) {
  createStar();
}
