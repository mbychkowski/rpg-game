// import { lukeSkywalker, stormtrooperAI} from 'characters.js';


// Random function generator
function randomGenerator(minValue, maxValue) {
  var range = maxValue - minValue;
  randomNumber = Math.floor( Math.random() * (range + 1) ) + minValue;

  return randomNumber;
}

var player = new LukeSkywalker();
console.log(player);
