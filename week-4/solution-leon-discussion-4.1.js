/*
 	============================================
 	; Title: 4.1 Arrays - Two Errors
 	; Author: Professor Krasso
 	; Date: 17 June 2020
 	; Modified by: Anil Rayamajhi
 	; Description: Arrays with Two Errors
 	;===========================================
 	*/

// Add Header

var header = require("../header.js");

console.log(
  header.display(
    "Anil",
    "Rayamajhi",
    "Exercise 4.1 - Array Exercise with Two Errors Post"
  )
);

console.log("\n");

/*
 	Expected Output:

 	Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday

 	*/

//Declare array
// Changed parenthesis to Array Bracket
var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// //output

console.log("Days of the Week: " + daysOfWeek);
