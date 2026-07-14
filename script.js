// =============================
// Mobile Menu
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.replace("fa-xmark", "fa-bars");

    });

});


// =============================
// Theme Toggle
// =============================

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const logo = document.getElementById("logo");

// Logo paths
const darkLogo = "assets/logo-dark.png";
const lightLogo = "assets/logo.png";

// Load Saved Theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    logo.src = lightLogo;

} else {

    document.body.classList.remove("light-theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    logo.src = darkLogo;

}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("fa-moon", "fa-sun");
        logo.src = lightLogo;

    } else {

        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
        logo.src = darkLogo;

    }

});