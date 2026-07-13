const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    icon.classList.replace("fa-moon", "fa-sun");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    }
});


const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});