/* ============================================
; Title: Exercise 4.2 - Array
; Author: Professor Cross
; Date: 19 June 2020

; Modified By: Anil Rayamajhi
;=========================================== */

/*
  Expected output:

  Anil Rayamajhi
  Exercise 4.2
  June 19 2020

  Apple
  Orange
  Banana
  Mango
  Pear
*/

// Add Header

var header = require("../header.js");

console.log(header.display("Anil", "Rayamajhi", "Exercise 4.2 - Array"));

console.log("*****************\n");

// Start Program
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

/**
 * @function
 * @param {*} array
 * @returns void
 */
function getFruit(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

// invoke getFruit() function
getFruit(fruits);
