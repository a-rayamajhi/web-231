/*
============================================
; Title:  Discussion Board 5.1 - Advanced Arrays
; Professor Cross
; Date:   25 June 2020
; Author: Anil Rayamajhi
; Modified By: {name}
;
; Description: JavaScript program with bugs
;===========================================
*/

var header = require("../header.js");
console.log(
  header.display("Anil", "Rayamajhi", "Discussion Board 5.1 - Advanced Arrays")
);

console.log("---\n");

/*
Deliverable:

Story point for WEB-101 is 3
Story point for WEB-102 is 5
Story point for WEB-103 is 1
Story point for WEB-104 is 3
Story point for WEB-105 is 2
*/

/**
 *
 * @param {*} story
 * @param {*} point
 *
 * @returns void
 */
function logger(story, point) {
  console.log(`Story point for ${story} is ${point}`);
}

/**
 * backlogs instance of Map
 * JavaScript Keyed Collections: Map
 */
const backlogs = new Map();

backlogs.add("WEB-101", "3");
backlogs.add("WEB-102", "5");
backlogs.add("WEB-103", "1");
backlogs.add("WEB-104", "3");
backlogs.add("WEB-105", "2");

//loop through map and output
backlogs.forEach((point, story) => logger);
