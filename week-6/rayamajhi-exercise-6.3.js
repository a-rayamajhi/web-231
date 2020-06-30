/*
============================================
; Title:  Exercise 6.3 - Object Literals
; Professor Cross
; Date:   29 June 2020 (PST)
; Author: Anil Rayamajhi
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 6.3 - Object Literals")
);

console.log("*****************\n");

/**
 * @Object person
 *
 */
var person = {
  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones",

  /**
   * @return string
   * Returns each property of the fields in a single string
   */
  get singleString() {
    return `{id: ${this.id}, name: ${this["name"]}, requester: ${this.requester}}`;
  },
};

console.log(person.singleString);
