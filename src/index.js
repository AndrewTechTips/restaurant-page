import loadHome from "./home";
import loadMenu from "./menu";

loadHome();

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

homeBtn.addEventListener("click", () => loadHome());
menuBtn.addEventListener("click", () => loadMenu());