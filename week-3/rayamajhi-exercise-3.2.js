/*
============================================
; Discussion Board 3.2 - Pattern Matching Functions
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
1 and 2 did not match
Cristy and Cristy matched
Cross and 3 did not match
*/

//Variable Declaration
var varOne = 1,
  varTwo = 2,
  varThree = "3",
  varFour = "Cristy",
  varFive = "Cross",
  varSix = "Cristy";

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
  console.log(`${parameterOne} and ${parameterTwo} matched`);
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
  console.log(`${parameterOne} and ${parameterTwo} did not match`);
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
