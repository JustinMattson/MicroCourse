/**
 *
 * TECHNICAL INTERVIEW
 * create an html element
 * add a class to html
 * what even is a class?
 * variables datatypes
 * variable assignment vs declaration
 * function(argument/parameter)
 * loop
 * array
 *
 */

// Declarations:
let hero = {
  name: "",
  health: 40,
  attack: attackEnemy() + 5,
};

let pantyWaste = false;

function startGame() {
  let enemies = [
    {
      name: "Barto",
      health: 1,
      attack: attackEnemy(),
    },
    {
      name: "Bartok",
      health: 4,
      attack: attackEnemy(),
    },
    {
      name: "Corin Avirus",
      health: 50,
      attack: attackEnemy() + 3,
    },
  ];

  alert("Brave adventurer a great task lies before you!");
  hero.name = prompt("What is your name?");
  alert("It is nice to meet you " + hero.name + "!");

  alert(
    "You are walking down a long dusty road, when suddently you hear a rustling the bushes, and a stinky smell wafts past your sensitive nose."
  );

  let investigate = confirm("Do you wish to investigate the bushes?");
  console.log(investigate);

  // if they don't investigate kill them
  if (!investigate) {
    alert(
      "Thinking you should simply mind your own business you walk past the bushes and feel a sharp twinge between your shoulderblades and the world goes black, you have died!"
    );
    alert("Game Over!");
    return;
  }
  // otherwise contiue the adventure
  alert(
    "As you approach the bushes, the smell is overwhelming!  Out fly " +
      enemies.length +
      " enemies!"
  );

  while (enemies.length > 0) {
    let currentEnemy = enemies[0];
    alert(
      "Your health is " +
        hero.health +
        "; " +
        currentEnemy.name +
        "'s health is " +
        currentEnemy.health +
        "."
    );
    let fight = confirm("Do you want to fight?");
    // fight
    if (!fight) {
      hero.health -= currentEnemy.attack;
      alert(
        currentEnemy.name +
          " hit you for " +
          currentEnemy.attack +
          " points as you fled like a coward!"
      );
      if (hero.health <= 0) {
        alert(
          "You have succummed to the enemy force, you have died!  GAME OVER!"
        );
        return;
      }
      pantyWaste = true;
      break;
    } else {
      console.log(
        currentEnemy.name +
          ": " +
          currentEnemy.health +
          " attack: " +
          currentEnemy.attack +
          "\n hero health: " +
          hero.health +
          "  hero attack: " +
          hero.attack
      );

      alert("You are fighting " + currentEnemy.name + "!");

      currentEnemy.health -= hero.attack;
      hero.health -= currentEnemy.attack;

      alert(
        "You hit " +
          currentEnemy.name +
          " for " +
          hero.attack +
          " points!\n" +
          currentEnemy.name +
          " hits you for " +
          currentEnemy.attack +
          " points!"
      );

      if (currentEnemy.health <= 0) {
        alert("You killed " + currentEnemy.name + "!");
        enemies.shift();
        attackEnemy();
      }
    }
    // CHECK THE HERO HEALTH
    if (hero.health <= 0) {
      alert(
        "You have succummed to the enemy force, you have died!  GAME OVER!"
      );
      resetHero();
      return;
    }
  }
  if (!pantyWaste) {
    alert(
      "You are victorious!  You killed all the enemies, your name will forever be famous, YOU WIN!!!"
    );
  } else {
    alert("You escaped with your life. Count yourself lucky!");
    alert(
      "You are awoken from your dream, drenched in sweat, with an insatiable desire for pizza!"
    );
    resetHero();
  }
}

function attackEnemy() {
  let attack = Math.round(Math.random()) * 10;
  console.log("enemyAttack multiplier: " + attack);
  return attack;
}

function resetHero() {
  hero = {
    name: "",
    health: 40,
    attack: attackEnemy() + 5,
  };
}
