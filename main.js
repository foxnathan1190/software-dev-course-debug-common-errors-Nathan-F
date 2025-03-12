const readline = require('readline-sync');

let name = readline.question("What is your name? ");

console.log("Hello, " + name + "!");

let exOrIn = readline.question("Is type casting refering to explicit or inplicit conversion? ");

console.log("It is explicit and you entered: " + exOrIn);

let varType = readline.question("Do you use const or let when you don't want your variable to be changable? ");

console.log("Correct! it is: " + varType);

let num = readline.questionInt("Please enter a number as a number, not a sting or other variable type ");

console.log("You wrote the number: " + num);

let city = readline.question("In the code: let city = New York; console.log(city); city = Los Angeles; console.log(city) ");

console.log("The correct city would be Los Angeles, you dont need to specify let everytime. You entered: " + city);

let keyword = readline.question("Please name a reserved keyword that you can not use for variable naming: ");

console.log("You could have said let, var, const, or typeof and you entered: " + keyword);