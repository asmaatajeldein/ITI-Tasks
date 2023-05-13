var form = document.querySelector("form");
var idField = document.querySelector("input[type='number']");
var userImg = document.getElementById("user-img");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");



form.addEventListener("submit", function(e) {
    e.preventDefault();
    getUserData(idField.value);
})

function getUserData(userId) {
    var xhrUser = new XMLHttpRequest();
    xhrUser.open('get', `https://reqres.in/api/users/${userId}`);
    xhrUser.send();

    xhrUser.addEventListener("readystatechange", function() {
        if(xhrUser.readyState === 4 && xhrUser.status === 200) {
            var userData = JSON.parse(xhrUser.response).data;
            console.log(userData);
            userImg.setAttribute("src", userData.avatar);
            firstName.innerHTML = "First Name: " + userData.first_name;
            lastName.innerHTML = "Last Name: " + userData.last_name;
        } else if (xhrUser.status === 404) {
            firstName.innerHTML = "User was not found."
        }
    })
}