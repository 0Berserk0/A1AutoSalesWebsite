function myFunction() {
    var x = document.getElementById("admin-buttons");
    let passwordText = prompt("Enter your password");
    if (passwordText === "testing") {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } else {
        alert("Incorrect Password");
    }
}
