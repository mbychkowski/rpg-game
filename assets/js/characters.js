// Player character stats
// Luke skywalker Attacks
function LukeSkywalker() {
  this.name = 'Luke Skywalker';
  this.party = [1];
  this.healthPower = 120;
  this.attackPower = [5, 20];
  this.isStunned = false;
  this.attacks = ['jedi bash', 'force push', 'meditate'];

  this.forcePush = function() {
    var targetIsStunned = true;

  }
  this.jediBash = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
  this.meditate = function() {
    for (var i = 0; i < 20; i++) {
      if (this.healthPower > 119) {
        break;

      } else {
        this.healthPower++;
      }
    }
  }
};

// Stormtrooper Attacks
function Stormtrooper(stormtrooper) {
  this.name = 'Stormtrooper';
  this.party = [2, 4];
  this.healthPower = 60;
  this.attackPower = [2, 10];
  this.isStunned = false;
  this.attacks = ['blaster'];

  this.blaster = function() {
    var hitPoints = randomGenerator(this.attackPower[0], this.attackPower[1]);
    return hitPoints;
  }
};
