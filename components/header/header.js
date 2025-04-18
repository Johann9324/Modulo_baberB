document.addEventListener("DOMContentLoaded", () => {
    fetch("../components/header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            updateStyleActiveLink();
        })
    
    function updateStyleActiveLink() {
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const currentPath = window.location.pathname.split("/").pop();
        navLinks.forEach(link => {
            const linkPath = link.getAttribute("href");
        
            if (linkPath === currentPath) {
                link.classList.add("active");
            }
        
            link.addEventListener("click", function () {
                navLinks.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            });
        });
    };
   
});