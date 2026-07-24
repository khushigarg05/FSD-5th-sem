
let button = document.getElementById("registerBtn");

button.addEventListener("click", function () {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let result = document.getElementById("result");
    if (username === "") {
        result.innerHTML = "<p style='color:red;'>❌ Username is required!</p>";
        return;
    }
    result.innerHTML =
        "<h3>Registration Successful ✅</h3>" +
        "<p><strong>Username:</strong> " + username + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>";

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
});