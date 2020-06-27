/*
============================================
; Title:  barleta-findErrors.js
; Author: Marie Nicole Barleta
; Date:   25 June 2020
; Modified By: Anil Rayamajhi
; Description: Find errors advanced arrays
;===========================================
*/

/*Expected output:
Do
Re
Mi
Fa
So
La
Ti
Do
*/

//Code has multiple errors
let chords = new Map();

chords.set("C", "Do");
chords.set("D", "Re");
chords.set("E", "Mi");
chords.set("F", "Fa");
chords.set("G", "So");
chords.set("A", "La");
chords.set("B", "Ti");

for (let [key, value] of chords) {
  console.log(value);
}

console.log(chords.get("C"));
