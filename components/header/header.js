document.addEventListener("DOMContentLoaded", () => {
    fetch("../components/header/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);
});