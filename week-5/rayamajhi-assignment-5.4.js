/*
============================================
; Title:  Assignment 5.4 - Filtering/Reducing Complex Data Structures
; Professor Cross
; Date:   26 June 2020
; Author: Anil Rayamajhi
;===========================================
*/

// Add Header
var header = require("../header.js");

console.log(
  header.display(
    "Anil",
    "Rayamajhi",
    "Assignment 5.4 - Filtering/Reducing Complex Data Structures"
  )
);

console.log("*****************\n");

/*
  Deliverables:
  ---

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
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
  console.log(composer);
}

console.log("-- COMPOSER BY RATING --");

var composersByRating = composers.map(function (composer) {
  return `Rating: ${composer.rating}\nComposer: ${composer.lastName}\n`;
});

composersByRating.forEach(logger);

console.log("-- COMPOSER BY GENRE --");

var composersByGenre = composers.map(function (composer) {
  return `Genre: ${composer.genre}\nComposer: ${composer.lastName}\n`;
});

composersByGenre.forEach(logger);
