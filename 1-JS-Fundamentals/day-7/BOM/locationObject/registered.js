var searchQuery = location.search;
var searchParams = new URLSearchParams(searchQuery);

var section = document.querySelector("section");

section.innerHTML = `<h1>Welcome, ${searchParams.get("name")}!</h1>`;
section.innerHTML += "<h2>Your Info:</h2>";
section.innerHTML += `<h3>Gender: ${searchParams.get("gender")}</h3>`;
section.innerHTML += `<h3>E-mail: ${searchParams.get("email")}</h3>`;
section.innerHTML += `<h3>Mobile: ${searchParams.get("mobile")}</h3>`;