// Get Top Image
var header = document.getElementById("header");
header.style.textAlign = "right";

// Create Node For Bottom Image
var topImage = document.getElementsByTagName("img")[0]
var bottomImage = topImage.cloneNode(true);
bottomImage.style.textAlign = "left";

// Create Footer
var footer = document.createElement("footer");
footer.append(bottomImage);
document.body.append(footer);

// Modify The Unordered List
var unorderedList = document.getElementById("nav");
unorderedList.style.listStyleType = "circle";
unorderedList.style.listStylePosition = "inside";