/*
============================================
; Exercise 3.2 - Pattern Matching Functions
; Author: Anil Rayamajhi
; Date:   11 June 2020
;
;
; Description: Using conditional Statement and functional
;              approach to strictly validate Variables
; Execute: node rayamajhi-exercise-3.2.js
;===========================================
*/

/*
Deliverable:
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//Variable Declaration
var varOne = "Truck",
  varTwo = "Car",
  varThree = "Four",
  varFour = "Bike",
  varFive = "Three",
  varSix = "Bike";

/**
 * Params: parameterOne, parameterTwo
 * Response: Boolean
 *
 * Description: strict comparison between parameters
 */
function match(parameterOne, parameterTwo) {
  // if statement
  if (parameterOne === parameterTwo) {
    return true;
  }
  return false;
}

/**
 * Params: parameterOne, parameterTwo
 * Response: Void
 *
 * Description: logger for matched result
 */
function logMatch(parameterOne, parameterTwo) {
  console.log(`${parameterOne} and ${parameterTwo} do matched!`);
}
// test invoke
console.log(`\n****Test Match****`);
logMatch(1, 1);

// line breaks
console.log("\n");

/**
 * Params: parameterOne, parameterTwo
 * Response: Void
 *
 * Description: logger for mismatched result
 */
function logMismatch(parameterOne, parameterTwo) {
  console.log(`${parameterOne} and ${parameterTwo} do not match!`);
}
// test invoke
console.log(`****Test Mismatch****`);
logMismatch(1, 2);

// line breaks
console.log("\n\n");

/**
 * Conditional statements to validate
 * if the declared variables are strictly equal
 */
if (match(varOne, varTwo)) {
  logMatch(varOne, varTwo);
} else {
  logMismatch(varOne, varTwo);
}

if (match(varFour, varSix)) {
  logMatch(varFour, varSix);
} else {
  logMismatch(varFour, varSix);
}

if (match(varFive, varThree)) {
  logMatch(varFive, varThree);
} else {
  logMismatch(varFive, varThree);
}

console.log("\n");
