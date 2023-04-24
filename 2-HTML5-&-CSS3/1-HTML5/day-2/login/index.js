
var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");

var userNameInput = inputs[0];
var emailInput = inputs[1];

window.addEventListener("load", function () {
    if(!localStorage.username && !localStorage.email) {
        userNameInput.value = "";
        emailInput.value = "";
    } else {
        userNameInput.value = localStorage.username;
        emailInput.value = localStorage.email;
    }
})