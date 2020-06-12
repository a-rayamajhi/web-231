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

/**
Usage of if statement

let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
 */

/*
Deliverable:
The enter key was pressed.
*/

//Variable Declaration
var programmingLanguage = 13;

/**
 * Params: parameter
 * Response: Void
 *
 * Description: logger
 */
function loggerFunction(parameter) {
  console.log(`The ${parameter} key was pressed.`);
}

switch (programmingLanguage) {
  case 13:
    loggerFunction("enter");
    break;
  case 16:
    loggerFunction("shift");
    break;
  case 32:
    loggerFunction("spacebar");
    break;
  case 8:
    loggerFunction("backspace / delete");
    break;
  default:
    console.log("Unrecognized key.");
    break;
}
