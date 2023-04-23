var numberField = document.querySelector("input[type=text]");

numberField.addEventListener("keydown", function (event) {
    // Allow only Backspace, Delete and Number
    console.log(event);
    if (event.key === "Backspace" || event.key === "Delete" || event.key === "0") {
        return false;
    } else if (!Number(event.key)) {
        event.preventDefault();
    }
})