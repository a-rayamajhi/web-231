/*
============================================
; Assignment 3.4 - Loops
; Author: Anil Rayamajhi
; Date:   11 June 2020
;
;
; Description: iterate and validate strict match
; Execute: node rayamajhi-assignment-3.4.js
;===========================================
*/

/*
Deliverable:
  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

// variable Declaration
var varNum = 1;

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
  console.log(`${parameterOne} does match ${parameterTwo}!`);
}

/**
 * Params: parameterOne, parameterTwo
 * Response: Void
 *
 * Description: logger for mismatched result
 */
function logMismatch(parameterOne, parameterTwo) {
  console.log(`${parameterOne} does not match ${parameterTwo}!`);
}

/**
 * Params: n/a
 * Response: integer value
 *
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as
 * this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// for loop
for (let index = 0; index < 10; index++) {
  // assign random number
  var randNum = randomNumber();
  if (match(randNum, varNum)) {
    // match logger
    logMatch(randNum, varNum);
  } else {
    // mismatch logger
    logMismatch(randNum, varNum);
  }
}
