// Q1
var y;
console.log(y); //undefined

//Q2
console.log(y); // error, not defined

//Q3
var x;
var y = 20;
console.log(y - x * 2); // 0

//Q4
var y;
console.log(typeof y); // undefined

//Q5
var x = "1";
var y = 2;
console.log(x + y); // "12"

//Q6
var x = 1;
var y = true;
console.log(x + y); // 2

//Q7
var x = 12;
var y = "6";
console.log(x / y); // 2

//Q8
console.log(15 + 3 + "number"); //"18number"
console.log("number" + 15 + 3); //"number153"

var x = 15 + 3 + "number";

//Q9
var x = false;
var y = !!x;
console.log(y); // false

//Q10
var x = menna;
console.log(typeof x == "string"); //  error, menna is not defined


//Q11
var x = false;
console.log(typeof x == 0); // (typeof x) == 0 
// false


//Q12
// convert from number to string
var x = 10;
String(x);    // note: 'null' and 'undefined' gets converted to string
x.toString(); // note: in case of 'null' and 'undefined', it gives an error

// convert from string to number
var y = "20";
Number(y);
parseInt(y);
+y; // unary operator


//Q13 (Check if number)
console.log(typeof x === 'number');
console.log(!isNaN(x));
console.log(isFinite(x));  // works with any real number.

//Q14 (Check if string)
console.log(typeof x === 'string');
console.log(isNaN(x));


// notes:
isNaN('');         // false (interpreted as zero)
isNaN(true);       // false (interpreted as one)
isNaN(false);      // false (interpreted as zero)
isNaN(null);       // false (interpreted as zero)
isNaN(undefined);  // true