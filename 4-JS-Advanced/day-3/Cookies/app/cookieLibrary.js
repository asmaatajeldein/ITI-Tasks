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
    
    // console.log(cookieArr);
    // cookieArr.forEach(function(cookie) {

    //     cookie = cookie.trim();
    //     var nameOfCookie = cookie.split('=')[0];
    //     var valueOfCookie = cookie.split('=')[1];

    //     if(nameOfCookie === cookieName) {
    //         cookieFound = true;
    //         return valueOfCookie; // won't work because this return statement doesn't break the loop, the loop will continue after it
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