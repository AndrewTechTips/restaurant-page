export default function loadHome() {
    
    //Pull div from html
    const contentDiv = document.getElementById("content");

    //Clear div before loading anything (essentially for tab switching)
    contentDiv.innerHTML = "";

    const headLine = document.createElement("h1");
    headLine.textContent = "Welcome to our classy Restaurant!";

    const image = document.createElement("img");
    image.src = "https://static.vecteezy.com/system/resources/previews/043/765/030/non_2x/opulent-and-sophisticated-luxury-restaurant-interior-with-elegant-chandelier-and-lavish-dining-setting-photo.jpeg";
    image.alt = "Restaurant interior";

    const description = document.createElement("p");
    description.textContent = "We have the best food in town, made with passion!";

    contentDiv.appendChild(headLine);
    contentDiv.appendChild(image);
    contentDiv.appendChild(description);

}