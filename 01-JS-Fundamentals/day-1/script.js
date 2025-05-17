// Q1
var y;
console.log(y); // result: undefined

// Q2
console.log(y); // result: error (y is not defined)

// Q3
var x = 10;
var y = 20;
console.log(y - x * 2); // result: 0

// Q4
var y;
console.log(typeof y); // result: undefined

// Q5
var x = "1";
var y = 2;
console.log(x + y); // result: "12"

// Q6
var x = 1;
var y = true;
console.log(x + y); // result: 2

// Q7
var x = 12;
var y = "6";
console.log(x / y); // result: 2

// Q8
console.log(15 + 3 + "number"); // result: "18number"
console.log("number" + 15 + 3); // result: "number153"

// Q9
var x = false;
var y = !!x;
console.log(y); // result: false

// Q10
var x = menna;
console.log(typeof x == "string"); // result: error (menna is not defined)

// Q11
var x = false;
console.log(typeof x == 0); // (typeof x) == 0
// result: false

// Q12
// converting from number to string
var x = 10;
String(x); // note: 'null' and 'undefined' gets converted to string
x.toString(); // note: in case of 'null' and 'undefined', it gives an error

// converting from string to number
var y = "20";
Number(y);
parseInt(y);
+y; // unary operator

// Q13 (Check if number)
console.log(typeof x === "number");
console.log(!isNaN(x));
console.log(isFinite(x)); // works with any real number.

// Q14 (Check if string)
console.log(typeof x === "string");
console.log(isNaN(x));

// notes:
isNaN(""); // false (interpreted as zero)
isNaN(true); // false (interpreted as one)
isNaN(false); // false (interpreted as zero)
isNaN(null); // false (interpreted as zero)
isNaN(undefined); // true
