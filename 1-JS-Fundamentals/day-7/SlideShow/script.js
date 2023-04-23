
// 1- Capture the div where the buttons are
// 2- Add an Eventlistener to listen when a button is 
//    clicked in the div and bring it's value (make sure to 
//    exclude the rest of the div) (use this and event.target)
// 3-

var buttonsDiv = document.getElementById("buttons");

buttonsDiv.addEventListener("click", function(event) {
    if(event.target !== this) {
        var buttonValue = event.target.value;
        
        switch (buttonValue) {
            case "next":
                nextAction();
                break;
            case "slideshow":
                slideShowAction();
                break;
            case "stop":
                stopAction();
                break;
            case "previous":
                previousAction();
                break;
        }
    }
});

// current Image Defaults to 1
var currentImage = 1;

displayImage(currentImage);

// Function to Display the current image
function displayImage (image) {
    var img = document.getElementsByTagName("img")[0];
    img.setAttribute("src", `./images/${image}.jpg`);
}

function nextAction () {
    // goes to the next pic and stops when reaching the last image
    if (currentImage < 6){
        currentImage++;
        displayImage(currentImage);
    }
}

var slider = null; // to indicate if the slideshow was activated or not

function slideShowAction () {
    if (slider) {
        return
    }

    slider = setInterval(function () { 

        // will circulate after reaching the last image
        if(currentImage >= 6) {
            currentImage = 1;
            displayImage(currentImage);
        } else {
            nextAction();
        }

    }, 1000);
}

function stopAction () {
    clearInterval(slider);
    slider = null;
}

function previousAction () {
    if (currentImage > 1) {
        currentImage--;
        displayImage(currentImage);
    }
}