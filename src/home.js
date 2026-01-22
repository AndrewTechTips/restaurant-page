export default function loadHome() {
    
    //Pull div from html
    const contentDiv = document.getElementById("content");

    //Clear div before loading anything (essentially for tab switching)
    contentDiv.innerHTML = "";
    contentDiv.className = "home-tab";

    const title = document.createElement("h1");
    title.textContent = "Midnight Lounge";

    const tagLine = document.createElement("h3");
    tagLine.textContent = "Taste the Atmosphere";
    tagLine.style.fontStyle = "Italic";
    tagLine.style.marginBottom = "20px";

    const text = document.createElement("p");
    text.textContent = "Experience culinary alchemy in the heart of the city. We blend shadow and light to bring you flavors that exist only in your wildest dreams. Perfect for late-night cravings and sophisticated palates.";

    contentDiv.appendChild(title);
    contentDiv.appendChild(tagLine);
    contentDiv.appendChild(text);
}