/*
============================================
; Title:  Assignment 6.4 - Nested Object Literals
; Professor Cross
; Date:   29 June 2020 (PST)
; Author: Anil Rayamajhi
;===========================================
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Assignment 6.4 - Nested Object Literals")
);

console.log("*****************\n");

/*
  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

var todaysDate = new Date().toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  ticket = {
    id: 105,
    name: "Ticket 105",
    dateCreated: todaysDate,
    priority: "Critical",
    person: {
      id: 101,
      firstName: "Bob",
      lastName: "Jones",
      jobTitle: "Programmer I",
    },

    get stringOutput() {
      const { person } = this;
      return `${this.name} was created on ${this.dateCreated} and assigned to employee ${person["firstName"]} ${person["lastName"]} (${person.jobTitle})`;
    },
  };

console.log(ticket.stringOutput);
