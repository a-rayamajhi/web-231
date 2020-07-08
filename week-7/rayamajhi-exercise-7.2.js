/*
============================================
; Title:  Exercise 7.2 - Constructor Functions
; Professor Cross
; Date:   7 July 2020 (PST)
; Author: Anil Rayamajhi
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 7.2 - Constructor Functions")
);

console.log("*****************\n");

var id = 1;
function Employee(firstName, lastName, title) {
  this.id = id++;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employees = [
  new Employee("Thomas", "Edison", "Software Engineer"),
  new Employee("Benjamin", "Franklin", "Programmer"),
  new Employee("Nikola", "Tesla", "Project Manager"),
  new Employee("Charles", "Babbage", "Product Manager"),
  new Employee("Alexander", "Bell", "Business Analyst"),
];

function logger(object) {
  const { id, firstName, lastName, title } = object;
  console.log(`${id} ${firstName} ${lastName} ${title}`);
}

employees.forEach(logger);
