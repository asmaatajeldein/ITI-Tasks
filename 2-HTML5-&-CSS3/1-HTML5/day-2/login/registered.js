var searchQuery = location.search;
var searchParams = new URLSearchParams(searchQuery);

if(!searchParams.has("remember")) {
    localStorage.clear();
}
else {
    localStorage.setItem("username", searchParams.get("username"));
    localStorage.setItem("email", searchParams.get("email"));
}