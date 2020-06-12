/*
============================================
; Discussion Board 3.2 - Control Statements
; Author: Anil Rayamajhi
; Date:   11 June 2020
;
;
; Description: Use switch statement for multi branches
; Execute: node rayamajhi-exercise-3.3.js
;===========================================
*/

/*
Deliverable:
JavaScript Rocks!
*/

//Variable Declaration
var programmingLanguage = "JavaScript";

/**
 * Params: parameter
 * Response: Void
 *
 * Description: logger
 */
function loggerFunction(parameter) {
  console.log(`\n*******${parameter} Rocks!*******\n`);
}

switch (programmingLanguage) {
  case "php":
    loggerFunction("php");
    break;
  case "Go":
    loggerFunction("Go");
    break;
  case "JavaScript":
    loggerFunction("JavaScript");
    break;
  case "Elixir":
    loggerFunction("Elixir");
    break;
  default:
    break;
}
