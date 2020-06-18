/*
============================================
; Title:  Discussion Board 4.1 - Arrays
; Author: Professor Cross
; Date:   17 June 2020
; Modified by: Anil Rayamajhi
; Description: JavaScript program with three errors
;===========================================
*/

var header = require("../header.js");
console.log(
  header.display("Anil", "Rayamajhi", "Discussion Board 4.1 - Arrays")
);

console.log("---\n");

/*
Deliverable:
[2, 4, 6, 8]
*/

//  Declare array
// Set size to numArray
//  HINT: https://github.com/buwebdev/web-231/blob/master/week-4/arrays-and-operators.js
const numArray = new Array[10](),
  payload = [];

/**
 * Description: loop to accumulate even number in payload array
 * HINT: '%' operator
 */
for (let index = 1; index < numArray.length; index++) {
  if (index / 2 === 0) {
    // push index to payload
    payload.add(index);
  }
}

//output
console.log(payload);
