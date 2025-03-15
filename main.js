/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

const hasSword = true;
const hasCompass = true

console.log("You come across a fearsome beast: you can fight it or flee.");
const choice2 = readline.question("Do you draw your sword and fight or do you run and flee?");

if (choice2 === "fight" && hasSword) {
    console.log("You fiight hard and prevail, killing the monster.")
} else if (choice2 === "fight" && !hasSword) {
    console.log("You fight coragiously and fall to the beast.");
} else if (choice2 === ("flee" || hasSword) && hasCompass) {
    console.log("You get away, either by scaring the beast with your sword and running or by running immediately and find your way home.");
} else {
    console.log("You get lost and the beast sneaks up behind you and kills you.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/