// EVENTS ///////////////////////////////


// Q1 ////////////////
var displayButton = document.createElement("button");
displayButton.setAttribute("type", "button");
displayButton.textContent = "Display Current Date & Time";
displayButton.addEventListener("click", function(){
    alert(new Date().toLocaleString());
});
document.body.append(displayButton);


// Q2 ////////////////
var promptButton = document.createElement("button");
promptButton.setAttribute("type", "button");
promptButton.textContent = "Click To Do Calculations";
promptButton.addEventListener("click", function(){
    do {
        var userInput = prompt("Enter The Desired Calculation:");
        // RegEx to check if the user has entered a valid arithmetic operation
        var regInput = /^[0-9()+\-*.\/]*$/;
    } while (!userInput || !regInput.test(userInput))

    alert(`The Result Is: ${eval(userInput)}`);
});

document.body.append(promptButton);


// DOM ////////////////////////////////////////////////////

// Q1 /////////////////////

do {
    var numPersons = Number(prompt("Enter The No. Of Persons:"));
} while(!numPersons)

var userNames = [];
var userAges = [];

function validUserName(userName) {
    // RegEx to validate character a-z, A-Z only
    var regName = /^[a-zA-Z]*$/;
    if (userName.length < 3 || userName.length > 10 || !regName.test(userName) || !userName) {
        return false;
    }
    return true;
}

function validUserAge(userAge) {
    if (userAge < 10 || userAge > 60 || isNaN(userAge) || !userAge) {
        return false;
    }
    return true;
}

for (var i = 0; i < numPersons; i++) {

    do {
        userNames[i] = prompt(`Enter User ${i + 1} Name:`);
    } while (!validUserName(userNames[i]))

    do {
        userAges[i] = prompt(`Enter User ${i + 1} Age:`);
    } while(!validUserAge(userAges[i]))

}

// Select the tbody element
var tableBody = document.getElementsByTagName("tbody")[0];

// loop througth the two arrays and create tr elements

for (var i = 0; i < numPersons; i++) {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${userNames[i]}</td> <td>${userAges[i]}</td>`;
    tableBody.append(tr);
}

document.getElementsByTagName("table")[0].style.display = "table";


// Q2 //////////////////////////

var div = document.createElement("div");
div.style.backgroundColor = generateRandomColor();
div.style.width = "200px";
div.style.height = "200px";
div.style.display = "inline-block";

document.body.append(div);

function generateRandomColor() {

    // Generate a Random Hexadecimal Color Code (#F66789)
    var hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    var hexColorRep = "#";

    for (var i = 0; i < 6; i++) {
        var randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += hexCharacters[randomPosition];
    }

    return hexColorRep;
};

div.addEventListener("click", function (){
    var newDiv = div.cloneNode(true);
    newDiv.style.backgroundColor = generateRandomColor();
    document.body.append(newDiv);
});
