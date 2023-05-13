var form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    var user = document.querySelector('#name').value;
    var age = document.querySelector('#age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var color = document.querySelector('#color').value;
    
    setCookie("name", user);
    setCookie("age", age);
    setCookie("gender", gender);
    setCookie("color", color);
    setCookie("visits", 1);

    location.replace("registered.html");
});