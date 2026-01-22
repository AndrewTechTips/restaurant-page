import "./style.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

loadHome();

document.getElementById("home-btn").classList.add("active");

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {

    button.addEventListener("click", e => {
        
        navButtons.forEach(btn => btn.classList.remove("active"));

        e.target.classList.add("active");

        const id = e.target.id;

        if (id === "home-btn") loadHome();
        if (id === "menu-btn") loadMenu();
        if (id === "contact-btn") loadContact();
    });
});
