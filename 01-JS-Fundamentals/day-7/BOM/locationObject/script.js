// if the user is inactive for 30 seconds show timeout
setTimeout(function () {
    alert("Page Timeout. You need to refresh.");
    location.reload();
}, 30000);