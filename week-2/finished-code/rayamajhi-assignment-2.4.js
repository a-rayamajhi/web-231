/*

  Anil Rayamajhi
  Assignment 2.4
  June 7, 2020

  Deliverable:
  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.


  Execute: `node week-2/finished-code/rayamajhi-assignment-2.4.js`
*/

/**
 * Params: firstName, lastName
 * Response: fullName
 *
 * Description: Returns a well-formatted full name
 * by concatenating first and last name
 */
function fullName(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  return fullName;
}

var fullName = fullName("Anil", "Rayamajhi");
console.log("Full Name: ", fullName);

/**
 * Params: year, month, day
 * Response: date
 *
 * Description: Returns a well-formatted date based off of parameters
 */
function dateWriter(year, month, day) {
  var date = new Date(year, month - 1, day).toLocaleDateString("en-US");
  return date;
}

var date = new Date();
var todayDate = dateWriter(
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate()
);
console.log("Today's Date: ", todayDate);

/**
 * Params: number, numOfFixedPositions
 * Response: number
 *
 * Description: Returns a floating point where the decimal
 * positioned based on numOfFixedPositions parameter
 */
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

var currentTemperature = formatNumber(34.12314132, 2);
console.log("Current Temperature: ", currentTemperature);
/**
 * Params: paramString
 * Response: number|undefined
 *
 * Description: Coverts string to integer
 * check if conversion give payload of number type
 * if number return payload.
 */
function convertToInt(paramString) {
  var payload = parseInt(paramString);
  if (!isNaN(payload)) {
    return payload;
  }
}

var age = convertToInt("29.2");
console.log("Age: ", age);

/**
 * Params: paramString
 * Response: float|undefined
 *
 * Description: Coverts string to float
 * check if conversion give payload of number type
 * if number return payload.
 */
function convertToFloat(paramString) {
  var payload = parseFloat(paramString);
  if (!isNaN(payload)) {
    return payload;
  }
}

var goal = convertToFloat("10222.347");
console.log("Account Goal: ", goal);

console.log(`\n\n\n\nHello my name is ${fullName}!
\n\nToday's date is ${todayDate} and the current temperature is ${currentTemperature} degrees.
\n\nI am ${age} years old and my savings account goal is ${goal} dollars.`);
