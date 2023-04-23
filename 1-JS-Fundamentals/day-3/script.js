// Q1

function myFunc1(param1, param2) {
    if(arguments.length !== 2) {
        throw("this function accepts 2 paramaters.")
    }
}


// Q2

function reverseArgs() {
    var string = "";
    for(var i = arguments.length - 1; i >= 0; i--) {
        string += arguments[i] + " ";
    }
    return string;
}


// Q3

function add() {
    var sum = 0;
    for(var j = 0; j < arguments.length; j++) {
        if (typeof arguments[j] === "number") {
            sum += arguments[j];
        }
        else {
            throw(`${arguments[j]} is not of type Number.`)
        }
    }

    return sum;
}

// Q4

function input(message) {
    do {
        var userInput = Number(prompt(message));
    } while(!userInput)

    return userInput;
}

// input("Enter Your Age:");
// input("Enter Your Birthyear:");
