document.addEventListener("keydown", function (event) {
    var message = `ASCII Code of pressed key is ${event.keyCode}`
    if (event.ctrlKey) {
        message += "\nCtrl was pressed!";
    }
     if (event.altKey) {
        message += "\nAlt was pressed!";
    } 
    if (event.shiftKey) {
        message += "\nShift was pressed!";
    }

    alert(message);
    
});

// keypress doesn't fire for all the keys (deprecated)