// // Q1

// for (var i = 10; i <= 20; i+= 2) {
//     console.log(`Item ${i}`);
// };

// // Q2

// for (var i = 1; i <= 9; i+=2){
//     console.log(i);
// };

// // Q3

// alert("Welcome to my site");
// do {
//     var userName = prompt("Enter your name:");
// } while(!isNaN(userName) || userName === null)
// document.write(`Welcome ${userName}`);

// // Q4

// var sum = 0;
// do {
//     var num = prompt(`Your total Sum is: ${sum}
//                     \nEnter a Number:`);

//     // if the variable num is of type "number"
//     if (isFinite(num)) {
//         sum += Number(num);
//     };

// } while(sum <= 100 || Number(num) === 0)

// // Q5

// do {
//     var message = prompt("Enter your message:");
// } while(message === null)

// for (var i = 1; i <= 6; i++) {
//     document.write(`<h${i}>` + message + `</h${i}>`);
// };

// Q6

do {
    var userName = prompt("Your Name:");
} while(!isNaN(userName) || userName === null)

do {
    var birthYear = Number(prompt("Your Birthyear:"));
} while(!birthYear || birthYear > 2010)

// while(!isFinite(birthYear) || birthYear == null || birthYear == "" || birthYear > 2010)
// while(isNan(birthYear) || birthYear == null || birthYear == "" || birthYear > 2010)
// while(!birthYear || birthYear > 2010)

var date = new Date;
var currentYear = date.getFullYear();
var age = currentYear - birthYear;

document.write("<div> <u>Name:</u> " + userName + "</div>");
document.write("<div> <u>Birth Year:</u> " + birthYear + "</div>");
document.write("<div> <u>Age:</u> " + age + "</div>");