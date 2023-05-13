// create 3 grey marbles and one orange marble
var grayMarble1 = document.createElement("img");
grayMarble1.setAttribute("src", "./images/marble1.jpg");
var grayMarble2 = grayMarble1.cloneNode(true);
var grayMarble3 = grayMarble1.cloneNode(true);
var grayMarble4 = grayMarble1.cloneNode(true);

var orangeMarble = document.createElement("img");
orangeMarble.setAttribute("src", "./images/marble2.jpg");

// create marbles array
var marblesArr = [orangeMarble, grayMarble1, grayMarble2, grayMarble3, grayMarble4];

// capture the div that will contain the marbles
var marblesDiv = document.getElementsByClassName("flex-container")[0];

var animation = setInterval(function () {
    swapMarbles(marblesArr);
    displayMarbles(marblesArr);
}, 1000);

marblesDiv.addEventListener("mouseleave", function () {
    animation = setInterval(function () {
        swapMarbles(marblesArr);
        displayMarbles(marblesArr);
    }, 1000);
});

marblesDiv.addEventListener("mouseenter", function () {
    clearInterval(animation);
});


function swapMarbles(arr) {
    var marble = arr.pop();
    arr.unshift(marble);
}

function displayMarbles(arr) {
    for (var i = 0; i < arr.length; i++) {
        marblesDiv.append(marblesArr[i]);
    }
}