// Q1 //////////////////////////////////////
let x = 10;
let y = 50;

[x, y] = [y, x];

console.log(x,y);

// Q2 //////////////////////////////////////
function minMax(...arr) {
    return [Math.max(...arr), Math.min(...arr)];
}

let arr = [10, 20, 50, 100, 60, 5];
let [min, max] = minMax(...arr);

console.log(min, max)

// Q3 //////////////////////////////////////
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// every element in array is a string
console.log(fruits.every(el => typeof el === "string"));

// check if some of elements starts with "a"
console.log(fruits.some(el => el.startsWith("a")));

// filter array with elements that starts with "b" or "s"
var newArr = fruits.filter(el => el.startsWith("b") || el.startsWith("s"));

// Add "I like ...." to the fruits
var likedFruits = newArr.map(el => `I like ${el}.`)

// use forEach to display all elements from newArr
likedFruits.forEach(el => console.log(el));