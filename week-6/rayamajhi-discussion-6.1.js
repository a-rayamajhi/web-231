/*
============================================
; Title:  Exercise 6.1 - Objects and Build-in Objects
; Professor Cross
; Author: Anil Rayamajhi
; Date: 29 June 2020 (PST)
; Modified by: {name}
;
; Description: Javascript program with multiple errors.
;===========================================
*/

var header = require("../header.js");
console.log(
  header.display(
    "Anil",
    "Rayamajhi",
    "Discussion Board 6.1 - Objects and Build-in Objects"
  )
);

console.log("---\n");

/*
Expected output:

Anil R
Address: West Hollywood CA 90069
*/

var person = {
  fullName: "Anil R",
  contacts: {
    phoneNumber: "444-666-9999",
    email: "anilrayamajhi@ar.io",
  },
  address: {
    city: "West Hollywood",
    state: "CA",
    zip: 90069,
  },

  /**
   * @returns String
   *
   * Returns formatted Address
   */
  get formattedAddress() => {
    const address = this.address;
    "Address: " + address.city + " " + address.state + " " + address.zip;
  },
};

// Object Bracket Notation
console.log(person[fullName]);
// HINT: refer to JavaScript getter
// Look for formatted Address
console.log(person["address"]);
