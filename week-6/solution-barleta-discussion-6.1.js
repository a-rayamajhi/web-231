/*
============================================
; Title:  barleta-fixErrors.js
; Author: Marie Nicole Barleta
; Date:   02 July 2020
; Modified by: Anil Rayamajhi
; Description: Find errors, objects in JavaScript
;===========================================
*/

/*
Expected output:
Employee ID: 152942
Employee name: Nicole
Employee rate: 15
Employee name: Full-time
*/

//find errors
var employees = {
  idNum: 0452556,

  id: 152942,
  name: "Nicole",
  rate: 15,
  types: "Full-time",
};

console.log("Employee ID: ", employees.id);
console.log("Employee name: " + employees["name"]);
console.log("Employee rate: " + employees["rate"]);
console.log("Employee name: " + employees.types);
