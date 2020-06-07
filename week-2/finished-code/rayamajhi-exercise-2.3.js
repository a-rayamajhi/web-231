/*

  Anil Rayamajhi
  Exercise 2.3
  June 7, 2020

  Deliverable:
  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties

  Execute: `node week-2/finished-code/exercise-2.3.js`
*/

// function property
myName.anil = "Anil";

/**
 * Return: string
 *
 * Response: Function Prototype "anil"
 * Description: Returns a well-formatted string header
 */
function myName() {
  return myName.anil;
}

console.log(`\nHello ${myName()} Rayamajhi!`);
