// Q1 ////////////////////////////////////////////////////

// prompt the user for string input

function Palindrome () {

    do {
        
        var userInput = prompt("Enter a string to check if it's a palindrom or not");
    
    } while (!userInput)
    
    // ask to consider the case of the entered string or not
    var considerCase = confirm("Do you want to consider case?")
    
    if (!considerCase) {
        userInput = userInput.toLowerCase();
    }
    
    // check if the string is a palindrome or not using two pointers approach
    var left = 0;
    var right = userInput.length - 1;
    var palindrome = true;
    
    while (right > left) {
        if (userInput[left] !== userInput[right]) {
            palindrome = false;
            break;
        }
        left++;
        right--;
    }
    
    switch (palindrome) {
        case true:
            alert("this string is a palindrome.")
            break;
        case false:
            alert("this string is not a palindrome.")
            break;
    }

}

// Palindrome();

// Q2 ///////////////////////////////////////////////////////////////

function countE () {
    var userInput = prompt("Enter a string");
    userInput = userInput.toLocaleLowerCase();
    var eCount = 0;
    
    for (var i = 0; i < userInput.length; i++) {
        if (userInput[i] === 'e') {
            eCount++;
        }
    }
    
    alert(`there are ${eCount} Es in the string.`);
}

// countE();

// Q3 /////////////////////////////////////////////////////////////////

function userInfo() {
    do {
        var userName = prompt("Enter your name");
        var regName = /[a-zA-Z]+/;
    } while (!userName || !regName.test(userName))
    
    do {
        var phoneNumber = prompt("Enter your phone number");
        var regPhoneNum = /^[0-9]{8}$/;
    } while (!phoneNumber || !regPhoneNum.test(phoneNumber))
    
    do {
        var mobileNumber = prompt("Enter your mobile number");
        var regMobileNum = /^(010|011|012)[0-9]{8}$/;
    } while (!mobileNumber || !regMobileNum.test(mobileNumber))
    
    do {
        var email = prompt("Enter your email");
        var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    } while (!email || !regEmail.test(email))
    
    var color = prompt("Choose a color: red, green or blue.");
    
    if (!color || color.toLowerCase() !== 'red' || color.toLowerCase() !== 'green' || color.toLowerCase() !== 'blue' ) {
        color = "black";
    }
    
    var styleColor = `style="color: ${color.toLowerCase()}"`;
    document.write(`<h1 ${styleColor}>Welcome, ${userName}!</h1>`);
    document.write(`<h4 ${styleColor}>Phone Number:${phoneNumber}</h4>`);
    document.write(`<h4 ${styleColor}>Mobile Number: ${mobileNumber}</h4>`);
    document.write(`<h4 ${styleColor}>Email: ${email}</h4>`);
}

// userInfo();