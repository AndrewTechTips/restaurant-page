import "./style.css";
import "./home.js";
import "./menu.js";
import "./contact.js";

import loadHome from "./home.js";
import loadMenu from "./menu.js";

loadHome();

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

homeBtn.addEventListener("click", () => loadHome());
menuBtn.addEventListener("click", () => loadMenu());