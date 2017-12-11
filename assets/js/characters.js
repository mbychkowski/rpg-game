// Player character stats
// Luke skywalker Attacks
function LukeSkywalker() {
  this.name = 'Luke Skywalker';
  this.party = [1, 1];
  this.healthPower = 120;
  this.attackPower = [5, 20];
  this.allegiance = 'hero',
  this.characterNumber = 0,
  this.isStunned = false,

  this.profile = ['assets/images/luke-skywalker.jpg', '160px', '220px'],

  this.attacks = ['jedi bash'],

  this.heroAttack = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
};

function ObiWanKenobi() {
  this.name = 'Obi-Wan-Kenobi';
  this.party = [1, 1];
  this.healthPower = 160;
  this.attackPower = [10, 15];
  this.allegiance = 'hero',
  this.characterNumber = 1,
  this.isStunned = false,

  this.profile = ['assets/images/obi-wan-kenobi.jpg', '160px', '220px'],

  this.attacks = ['jedi bash']

  this.heroAttack = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
};

// Stormtrooper Attacks
function Stormtrooper(stormtrooper) {
  this.name = 'Stormtrooper';
  this.party = [2, 4];
  this.healthPower = 60;
  this.attackPower = [2, 10];
  this.allegiance = 'enemy',
  this.isStunned = false,

  this.profile = ['assets/images/stormtrooper.jpg', '160px', '119px'],

  this.attacks = ['blaster'],

  this.enemyAttack = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
};
