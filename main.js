//Your application should:
//1. Use readlineSync.question() to prompt a user for input
//2. Prompt a user for an index number to find the character at that index
//3. Use bracket notation to access the character
//4. Print out the character

const readline = require('readline-sync');

let word = readline.question("Input word of your choice: ");

console.log("The word you chose is: " + word);

let indexNum = readline.questionInt("Input index number to find the character of that index: ");

console.log("The character for you index number is: " + word[indexNum]);