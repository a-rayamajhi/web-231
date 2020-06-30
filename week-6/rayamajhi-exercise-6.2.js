/*
============================================
; Title:  Exercise 6.2 - Exception Handling
; Professor Cross
; Date:   29 June 2020 (PST)
; Author: Anil Rayamajhi
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 6.2 - Exception Handling")
);

console.log("*****************\n");

// Exception
try {
  var val = 1 / 0;

  if (val == Infinity) throw "Cannot be a divide by zero exception";
  console.log("Value:  ", val);
} catch (err) {
  console.log("Catch clause:", err);
} finally {
  console.log("Finally clause reached...");
}
