// DATE OBJECT ////////////////////////////////

// Q1 ///////////////

do {
    var userInput = new Date(prompt("Enter a date in the format (DD-MM-YYYY):"));
} while (isNaN(userInput)); // isNaN() returns true if the date is invalid, and false if it's valid

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

alert(`the corresponding day of the week is ${weekDays[userInput.getDay()]}`);

// Q2 /////////////////

do {
    var birthDate = prompt("Enter your birthdate in the format (DD-MM-YYYY):");
} while (!isDateValid(birthDate) || !birthDate);

console.log(birthDate);

function isDateValid(birthDate) {
    var valid = true;

    if (
        isNaN(birthDate) ||
        birthDate.length !== 10 ||
        birthDate.charAt(2) !== "-" ||
        birthDate.charAt(5) !== "-"
    ) {
        valid = false;
    }

    if (!valid) {
        alert("Wrong Date Format!");
        return valid;
    } else {
        // we can use array destructuring here (ES6)
        var birthDateArr = birthDate.split("-");

        var day = birthDateArr[0];
        var month = birthDateArr[1];
        var year = birthDateArr[2];

        var birthDateObj = new Date(year, month - 1, day);
        alert(birthDateObj.toDateString());

        return valid;
    }
}

// MATH OBJECT ////////////////////////////////

// Q1 //////////////

do {
    var circleRadius = prompt("Enter the desired circle's radius to calculate its area.");
} while (isNaN(circleRadius) || !circleRadius);

var circleArea = Math.PI * Math.pow(circleRadius, 2);
alert(`total area of the circle is ${circleArea}`);

// // Q2 //////////////

do {
    var value = prompt("What is the value for which you want to calculate the square root?");
} while (isNaN(value) || value === "");

var valueSqrt = Math.sqrt(value);
alert(`The square root for ${value} is ${valueSqrt}`);

// ARRAY OBJECT ///////////////////////////////

// Q1 ///////////////

var jsTips = [
    "Use 'getElementById' method to access HTML elements",
    "Use 'addEventListener' method to bind events to HTML elements",
    "Use 'setAttribute' method to set attributes for HTML elements",
    "Use 'appendChild' method to append new HTML elements to existing ones",
    "Use 'querySelector' method to select HTML elements",
    "Use 'setTimeout' method to delay code execution",
    "Use 'setInterval' method to repeat code execution at a specified interval",
    "Use 'parseInt' method to convert a string to an integer",
    "Use 'parseFloat' method to convert a string to a floating-point number",
    "Use 'Date' object to work with dates and times",
];

alert(jsTips[parseInt(Math.random() * jsTips.length)]); // used jsTips.length to make it dynamic

// Q2 /////////////////

var userInputs = [];

for (var i = 0; i < 3; i++) {
    do {
        var input = Number(prompt(`Enter number ${i + 1}`));
    } while (isNaN(input) || !input);

    // push number into the array
    userInputs.push(input);
}

// Addition and Multiplication
var sumResult = 0;
var multiplicationResult = 1;

userInputs.forEach(function (num) {
    sumResult += num;
    multiplicationResult *= num;
});

// Division
var divisionResult = userInputs[0];

for (var i = 1; i < 3; i++) {
    divisionResult /= userInputs[i];
}

document.write("<h1>Adding -- Multiplying -- Dividing 3 Numbers</h1>");
document.write(`<h4> Sum of the 3 values ${userInputs.join("+")} = ${sumResult} </h4>`);
document.write(`<h4> Multiplication of the 3 values ${userInputs.join("*")} = ${multiplicationResult} </h4>`);
document.write(`<h4> Division of the 3 values ${userInputs.join("/")} = ${divisionResult} </h4>`);

// Q3 /////////////////

function reverseArray() {
    var arr = [];

    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    return arr.reverse();
}
