// Redirect to login.html if user hasn't unlocked the card yet
(function () {
    if (window.location.pathname.endsWith("login.html")) return; // avoid loop
    var allowed = localStorage.getItem("birthdayLogin") === "true";
    if (!allowed) {
        window.location.href = "login.html";
    }
})();
