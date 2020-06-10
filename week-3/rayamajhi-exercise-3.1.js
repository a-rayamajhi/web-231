/*
============================================
; Discussion Board 3.1 - Control Statements
; Author: Anil Rayamajhi
; Date:   9 June 2020
; Modified by: <  >
;
;
; Description: Snippet below has two errors, feel free to refer hint
;===========================================
*/

/*
Deliverable:
Numbers: [0, 5, 10, 15]
*/

//Variable Declaration
var numbers = [];

// for loop
for (var i = 0; i < 20; i++) {
  isDivisibleByFive(i);
}

/**
 * Params: index
 * Response: void
 *
 * Description: add number to numbers<Array> is strictly divisible of 5
 * Hint: Modulus `%` Operator
 */
function isDivisibleByFive(index) {
  // if statement
  if (!(index / 5)) {
    // index pushed to numbers array
    numbers = index;
  }
}

console.log("Numbers: ", numbers);
