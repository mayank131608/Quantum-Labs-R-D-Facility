document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "codingfreaks"  && password === "cf@123" ) {
        window.location.href="index2.html";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
});