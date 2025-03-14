/*

Objective
Practice converting characters from strings to Unicode code points
using charCodeAt and converting Unicode code points back to characters
using String.fromCharCode.

Instructions:
You will complete three tasks to explore the relationship
between characters and their Unicode code points.
Write JavaScript code to complete each task,
ensuring you assign your results to the specified variables.
Log all results to the console.

Tasks:
Task 1: Extract Code Points from Characters
Take the string "Code".
Use charCodeAt to extract the Unicode code points of the first and third characters.
Assign the results to variables named firstCodePoint and thirdCodePoint.

Task 2: Create a Word from Code Points
Use the Unicode code points 72, 101, 108, and 108 (corresponding to the characters H, e, l, and l).
Use String.fromCharCode to create the word "Hell".
Assign the result to a variable named wordFromCodePoints.

Task 3: Swap First and Last Characters
Take the string "Launch".
Extract the Unicode code points of the first and last characters using charCodeAt.
Use String.fromCharCode to swap these characters and create a new string: "hauncL".
Assign the result to a variable named swappedString.

*/

//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint = (inputString1.charCodeAt(0));
let thirdCodePoint= (inputString1.charCodeAt(2));
// Task 2
let codes = [72, 101, 108, 108];
let wordFromCodePoints = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]) + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3]);

// Task 3
let inputString2 = "Launch";
let swappedString = String.fromCharCode(inputString2.charCodeAt(5)) + String.fromCharCode(inputString2.charCodeAt(1)) + String.fromCharCode(inputString2.charCodeAt(2)) + String.fromCharCode(inputString2.charCodeAt(3)) + String.fromCharCode(inputString2.charCodeAt(4)) + String.fromCharCode(inputString2.charCodeAt(0));

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});