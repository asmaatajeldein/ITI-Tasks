window.addEventListener("load", function() {
    setCookie("visits", Number(getCookie("visits")) + 1);
})

var userNameSpan = document.getElementById("user-name");
var visitTimeSpan = document.getElementById("visit-time");
var userImg = document.querySelector("img");

userImg.setAttribute("src", `./images/${getCookie("gender")}.png`)

userNameSpan.innerHTML = getCookie("name");
userNameSpan.style.color = getCookie("color");

visitTimeSpan.innerHTML = getCookie("visits");
visitTimeSpan.style.color = getCookie("color");