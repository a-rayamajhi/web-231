/*
============================================
; Title:  3.1 Control Statements - Two Errors
; Author: Professor Krasso
; Date:   9 June 2020
; Modified by: Anil Rayamajhi
; Description: Switch Case Control Statement with Two Errors
;===========================================
*/

/*
Expected Output:
Today is XXXXday
*/

//Variables go here

//Declare variables
var dayToday = new Date();

var dayWord;

// control switch
switch (
  dayToday.getDay() //dayToday holds today's date in numeric value
) {
  case 0:
    dayWord = "Sunday";
    break;

  case 1:
    dayWord = "Monday";
    break;

  case 2:
    dayWord = "Tuesday";
    break;

  case 3:
    dayWord = "Wednesday";
    break;

  case 4:
    dayWord = "Thursday";
    break;

  case 5:
    dayWord = "Friday";
    break;

  case 6:
    dayWord = "Saturday";
}

//output

console.log("Today is " + dayWord);
