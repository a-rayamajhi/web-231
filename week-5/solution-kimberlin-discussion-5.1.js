/*
============================================
; Title:  Discussion 5.1
; Author: Rhiannon Kimberlin
; Date:   25 June 2020
; Modified by: Anil Rayamajhi
; Description: Create an advanced array Javascript
; program with two or more errors.
;===========================================
*/

let disney = new Map();
disney.set("Tangled", "Rapunzel");
disney.set("Beauty and the Beast", "Belle");
disney.set("Princess and the Frog", "Tiana");
disney.size;
disney.get("Tangled");
disney.get("Beauty and the Beast");
disney.get("Princess and the Frog");

for (let [movie, princess] of disney) {
  console.log(movie + " stars " + princess);
}

/*Output should be
Tangled stars Rapunzel
Beauty and the Beast stars Belle
Princess and the Frog stars Tiana*/
