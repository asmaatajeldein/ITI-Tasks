var dropdown = document.querySelector("#users");
var userImg = document.getElementById("user-img");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");

var xhrUsers = new XMLHttpRequest();
xhrUsers.open('get', `https://reqres.in/api/users`);
xhrUsers.send();

xhrUsers.addEventListener("readystatechange", function() {
    if(xhrUsers.readyState === 4 && xhrUsers.status === 200) {
        var users = JSON.parse(xhrUsers.response).data;
        users.forEach(function(user) {
            var option = document.createElement("option");
            option.setAttribute("value", user.id);
            option.innerHTML = user.first_name;
            dropdown.appendChild(option);
        });
    }
})

dropdown.addEventListener("change", function() {
    var xhrUser = new XMLHttpRequest();
    xhrUser.open('get', `https://reqres.in/api/users/${this.value}`);
    xhrUser.send();

    xhrUser.addEventListener("readystatechange", function() {
        if(xhrUser.readyState === 4 && xhrUser.status === 200) {
            var userData = JSON.parse(xhrUser.response).data;
            userImg.setAttribute("src", userData.avatar);
            firstName.innerHTML = "First Name: " + userData.first_name;
            lastName.innerHTML = "Last Name: " + userData.last_name;
        }
    })
})