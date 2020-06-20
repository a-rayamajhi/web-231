/* ============================================
; Title: Exercise 4.2 - Array
; Author: Professor Cross
; Date: 19 June 2020

; Modified By: Anil Rayamajhi
;=========================================== */

/*
  Expected output:

  Anil Rayamajhi
  Exercise 4.3 - Array
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

// Add Header
var header = require("../header.js");
console.log(header.display("Anil", "Rayamajhi", "Exercise 4.2 - Array"));

console.log("*****************\n");

// Start Program
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

/**
 * @function
 *
 * @param {*} array
 * @param {*} value
 * @returns void
 */
function getValue(array, value) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      console.log(array[index]);
    }
  }
}

// output
console.log("-- DISPLAYING ARRAY ITEMS __");
for (let index = 0; index < vehicles.length; index++) {
  console.log(vehicles[index]);
}

// new line
console.log("");

console.log("-- SELECTED VALUE --");
// invoke getValue() function
getValue(vehicles, "Motorcycle");

// new line
console.log("");

console.log("-- SELECTED VALUE --");
// invoke getValue() function
getValue(vehicles, "Bus");
