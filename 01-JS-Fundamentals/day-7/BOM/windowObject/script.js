var button = document.querySelector("button");

var child = null;

button.addEventListener("click", function () {
    child = window.open("child.html");
    setTimeout(function () {
        child.close();
    }, 5000);
})