/*
============================================
; Title:  Exercise 5.2 - ES5 Built-In Functions
; Professor Cross
; Date:   26 June 2020
; Author: Anil Rayamajhi
;===========================================
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 5.2 - ES5 Built-In Functions")
);

console.log("*****************\n");

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

var favFoods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

/**
 *
 * @param {*} el
 */
function logger(el) {
  console.log(el);
}

favFoods.forEach(logger);
