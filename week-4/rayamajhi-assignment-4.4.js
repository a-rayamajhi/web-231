/* ============================================
; Title: Assignment 4.4 - Predicates
;
; Author: Anil Rayamajhi
; Date: 20 June 2020
;=========================================== */

// Header
var header = require("../header.js");
console.log(header.display("Anil", "Rayamajhi", "Assignment 4.4 - Predicates"));

console.log("*****************\n");

/*
  Deliverables:
  -
  Anil Rayamajhi
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

// Create a string array of 5 states.
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// Create a function called getState with two string parameters
/**
 *
 * @param paramOne string
 * @param paramTwo string
 * @returns Boolean
 */
function getState(paramOne, paramTwo) {
  // In the body of the getState function add an
  // if statement to test if the two string parameters match.
  // If they match, return true
  if (paramOne === paramTwo) {
    return true;
  }
}

/**
 *
 * @param param string
 * @return void
 */
function logger(param) {
  console.log(param);
}

// Using JavaScript's built-in filter() function, call the getState function
// and pass-in the current element of the filter loop and the value to find
selectedValue = states.filter((el) => getState("Iowa", el));

// Run and test the program and make sure your output matches

// Display the contents of the original array
console.log("-- ORIGINAL ARRAY --");
states.forEach(logger);

//  new line
console.log("\n");

// Sort and display the contents of the updated array
console.log("-- SORTED ARRAY --");
states.sort().forEach(logger);

//  new line
console.log("\n");

// Display the selected value
console.log("-- SELECTED VALUE --");
console.log(selectedValue.toString());

/*************************/
