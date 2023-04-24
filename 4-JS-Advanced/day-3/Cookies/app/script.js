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



// COOKIE LIBRARY ////////////////////////////////////
function getCookie(cookieName) {
    if(!cookieName) {
        throw("Error: Cookie name was not specified.")
    }
    var retrievedCookie = document.cookie;
    var cookieArr = retrievedCookie.split(';');
    var cookieFound = false;

    for(var i = 0; i < cookieArr.length; i++) {
        var cookie = cookieArr[i].trim();
        var nameOfCookie = cookie.split('=')[0];
        var valueOfCookie = cookie.split('=')[1];

        if(nameOfCookie === cookieName) {
            cookieFound = true;
            return valueOfCookie;
        }
    }

    // cookieArr.forEach(function(cookie) {
    //     cookie.trim();
    //     var nameOfCookie = cookie.split('=')[0];
    //     var valueOfCookie = cookie.split('=')[1];
    //     if(nameOfCookie === cookieName) {
    //         cookieFound = true;
    //         return valueOfCookie;
    //     }
    // })

    if(!cookieFound) {
        throw("Error: Cannot find cookie.")
    }
}


function setCookie(cookieName, cookieValue, expiryDate) {

    if(!cookieName) {
        throw("Error: Enter the name and the value of the cookie.")
    } else if(!cookieValue) {
        throw("Error: set a value for the cookie")
    } else if(!expiryDate) {
        document.cookie = `${cookieName}=${cookieValue}`
    }

    var expiry = new Date(expiryDate).toUTCString();
    document.cookie = `${cookieName}=${cookieValue};expires=${expiry}`;
}

function deleteCookie(cookieName) {
    if(!cookieName) {
        throw("Error: Cookie name was not specified.")
    }

    document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

function allCookieList() {
    var cookieArr = document.cookie.split(';');
    cookieArr.forEach(function(cookie){
        cookie.trim()
    })
    return cookieArr;
}


function hasCookie(cookieName) {
    if(!cookieName) {
        throw("Error: Cookie name was not specified.")
    }

    return document.cookie.includes(cookieName);
}