// Player character stats
// Luke skywalker Attacks
function LukeSkywalker() {
  this.name = 'Luke Skywalker';
  this.party = [1, 1];
  this.healthPower = 120;
  this.attackPower = [1, 50];
  this.allegiance = 'hero',
  this.characterNumber = 0,

  this.profile = ['assets/images/luke-skywalker.jpg', '160px', '220px'],

  this.attacks = ['jedi bash'],

  this.heroAttack = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }

  // this.heroHeal = function(currentHealth) {
  //   for(var i = 0; i < 20; i++) {
  //     currentHealth += 1;
  //
  //     if (currentHealth > this.healthPower) {
  //       break;
  //     }
  //   }
  //   return currentHealth;
  // }
};

function ObiWanKenobi() {
  this.name = 'Obi-Wan-Kenobi';
  this.party = [1, 1];
  this.healthPower = 160;
  this.attackPower = [20, 25];
  this.allegiance = 'hero',
  this.characterNumber = 1,

  this.profile = ['assets/images/obi-wan-kenobi.jpg', '160px', '220px'],

  this.attacks = ['jedi mindtrick']

  this.heroAttack = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
};

// Stormtrooper Attacks
function Stormtrooper(i) {
  this.name = 'Stormtrooper';
  this.party = [2, 4];
  this.healthPower = 70;
  this.attackPower = [2, 10];
  this.allegiance = 'enemy',

  this.profile = ['assets/images/stormtrooper.jpg', '160px', '119px'],

  this.attacks = ['blaster'],

  this.enemyAttack = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
};
