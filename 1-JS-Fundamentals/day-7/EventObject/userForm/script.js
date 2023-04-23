var form = document.querySelector("form");
var resetButton = document.querySelector("input[value=Reset]");

// get table and table body
var tableElement = document.querySelector("table");
var tableBody = document.querySelector("tbody");

// get input fields
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");

// get the divs that contain inputs
var inputDivs = document.getElementsByTagName("div");

////////////////////////////////////////////////////////

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameValid = nameValidation(nameInput);
    var ageValid = ageValidation(ageInput);
    var emailValid = emailValidation(emailInput);

    if (nameValid && ageValid && emailValid) {

        if (tableElement.style.display === "") {
            tableElement.style.display = "table";
        }
    
        var tr = document.createElement("tr");
    
        var tdName = document.createElement("td");
        tdName.innerHTML = nameInput.value;
        tr.append(tdName);
        
        var tdAge = document.createElement("td");
        tdAge.innerHTML = ageInput.value;
        tr.append(tdAge);
    
        var tdEmail = document.createElement("td");
        tdEmail.innerHTML = emailInput.value;
        tr.append(tdEmail);
    
        tableBody.append(tr);

    }
})

resetButton.addEventListener("click", function () {
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
})


// Name Validation
function nameValidation (element) {
    var nameErrorSpan = document.createElement("span");
    nameErrorSpan.setAttribute("id", "name-error-span");

    var errorSpanInDom = document.getElementById("name-error-span");

    if(!/^[a-zA-Z]*$/.test(element.value)) {

        if(!errorSpanInDom) {
            nameErrorSpan.innerHTML = "invalid name.";
            inputDivs[0].append(nameErrorSpan);
        }
        return;

    } else if (element.value === ""){

        if(!errorSpanInDom) {
            nameErrorSpan.innerHTML = "required field.";
            inputDivs[0].append(nameErrorSpan);
        }
        return;

    } else {

        if(errorSpanInDom) {
            errorSpanInDom.remove();
        }
        return true;
    }
}

// Age Validation
function ageValidation (element) {
    var ageErrorSpan = document.createElement("span");
    ageErrorSpan.setAttribute("id", "age-error-span");

    var errorSpanInDom = document.getElementById("age-error-span");

    if(!/^[0-9]*$/.test(element.value)) {

        if(!errorSpanInDom) {
            ageErrorSpan.innerHTML = "invalid age. numbers only.";
            inputDivs[1].append(ageErrorSpan);
        }
        return;

    } else if (element.value === ""){

        if(!errorSpanInDom) {
            ageErrorSpan.innerHTML = "required field.";
            inputDivs[1].append(ageErrorSpan);
        }
        return;

    } else {

        if(errorSpanInDom) {
            errorSpanInDom.remove();
        }
        return true;

    }
}

// Email Validation
function emailValidation (element) {
    var emailErrorSpan = document.createElement("span");
    emailErrorSpan.setAttribute("id", "email-error-span");

    var errorSpanInDom = document.getElementById("email-error-span");

    regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if(!regEmail.test(element.value)) {

        if(!errorSpanInDom) {
            emailErrorSpan.innerHTML = "invalid email.";
            inputDivs[2].append(emailErrorSpan);
        }
        return;

    } else if (element.value === ""){

        if(!errorSpanInDom) {
            emailErrorSpan.innerHTML = "required field.";
            inputDivs[2].append(emailErrorSpan);
        }
        return;

    } else {

        if(errorSpanInDom) {
            errorSpanInDom.remove();
        }
        return true;

    }
}