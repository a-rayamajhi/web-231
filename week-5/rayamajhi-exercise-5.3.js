/*
============================================
; Title:  Exercise 5.3 - Object Collections
; Professor Cross
; Date:   26 June 2020
; Author: Anil Rayamajhi
;===========================================
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 5.3 - Object Collections")
);

console.log("*****************\n");

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

var composers = [
  {
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8,
  },
  {
    lastName: "Mozart",
    genre: "Classical",
    rating: 10,
  },
  {
    lastName: "Bach",
    genre: "Classical",
    rating: 9,
  },
  {
    lastName: "Haydn",
    genre: "Classical",
    rating: 6,
  },
  {
    lastName: "Schubert",
    genre: "Classical",
    rating: 5,
  },
];

/**
 *
 * @param {*} composer
 * @returns void
 */
function logger(composer) {
  console.log(
    "Last Name: " +
      composer.lastName +
      ", Genre: " +
      composer.genre +
      ", Rating: " +
      composer.rating
  );
}

composers.forEach(logger);
