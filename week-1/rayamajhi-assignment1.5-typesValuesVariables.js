/*
Title: Assignment 1.5
Date: 31 May 2020

Anil Rayamajhi
Description: Types, Values, and Variables
*/

/*
Create 3 employee records with the following fields (this means there should be 3 firstName variables, 3 lastName variables, 3 address variables, 3 payRate variables, and 3 hireDate variables)
    firstName
    lastName
    address
    payRate
    hireDate
Format the payRate to one decimal place (see page 48 of the courses textbook)
Format the hireDate using "slashes" (see page 35 of the courses textbook; use JavaScript's built-in new Date() object)
Run and test the program and make sure the output matches what I have 
When you are happy with the output stage, commit, and push your work to GitHub
*/

// Employee One
var personOneFirstName;
personOneFirstName = "Cody";
console.log(personOneFirstName);

var personOneLastName;
personOneLastName = "Gunn";
console.log(personOneLastName);

var personOneAddress;
personOneAddress = "1650 Stradella Rd, Los Angeles, 90077-8262";
console.log(personOneAddress);

var personOnePayRate;
personOnePayRate = 24.324;
console.log(personOnePayRate.toFixed(1));

var personOneHireDate;
personOneHireDate = "2017-3-31";
personOneFormattedHireDate = new Date(personOneHireDate);
console.log(personOneFormattedHireDate.toLocaleDateString());

console.log("\n*************************");

// Employee Two
var personTwoFirstName;
personTwoFirstName = "Liam";
console.log(personTwoFirstName);

var personTwoLastName;
personTwoLastName = "Downey";
console.log(personTwoLastName);

var personTwoAddress;
personTwoAddress = "1650 Beverly Glen, Los Angeles, 90023";
console.log(personTwoAddress);

var personTwoPayRate;
personTwoPayRate = 44.31314;
console.log(personTwoPayRate.toFixed(1));

var personTwoHireDate;
personTwoHireDate = "2019-5-1";
personTwoFormattedHireDate = new Date(personTwoHireDate);
console.log(personTwoFormattedHireDate.toLocaleDateString());

console.log("\n*************************");

// Employee Three
var personThreeFirstName;
personThreeFirstName = "Tmethy";
console.log(personThreeFirstName);

var personThreeLastName;
personThreeLastName = "Pane";
console.log(personThreeLastName);

var personThreeAddress;
personThreeAddress = "4352 Swattle blvd, Oxnard, 98374";
console.log(personThreeAddress);

var personThreePayRate;
personThreePayRate = 9.31314;
console.log(personThreePayRate.toFixed(1));

var personThreeHireDate;
personThreeHireDate = "2020-1-11";
personThreeFormattedHireDate = new Date(personThreeHireDate);
console.log(personThreeFormattedHireDate.toLocaleDateString());

console.log("\n*************************\n");
