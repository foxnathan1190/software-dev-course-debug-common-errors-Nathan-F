/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; //made 5 a number since it was already doing a subtraction.
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log(Boolean(false)); // made boolean false in console.log to get is valid to be false
}

let age = Number("25"); // made 25 a number so that total agae would be 25 plus 5 to be 30 instead of 255.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

let b = 5;
let c = null;
let result3 = b + c; // number + null = number (null is 0)
console.log("result3:", result3, ", type(result3):", typeof result3);

let floatString = "3.14";
let floatNumber = parseFloat(floatString); // Explicitly convert string to float
console.log("floatNumber:", floatNumber, ", type:", typeof floatNumber);