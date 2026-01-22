export default function loadContact() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    const text = document.createElement("p");
    text.textContent = "Hidden in plain sight. Reservations are essential.";

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("contact-info");
    infoContainer.style.textAlign = "left";
    infoContainer.style.display = "inline-block";

    infoContainer.innerHTML = `
        <div style="margin-bottom: 15px;">
            <i class="fas fa-map-marker-alt" style="color: var(--gold); width: 25px;"></i> 
            123 Shadow Avenue, Moonlight District
        </div>
        <div style="margin-bottom: 15px;">
            <i class="fas fa-phone" style="color: var(--gold); width: 25px;"></i> 
            +1 (555) 000-DARK
        </div>
        <div style="margin-bottom: 15px;">
            <i class="fas fa-envelope" style="color: var(--gold); width: 25px;"></i> 
            reserve@midnightlounge.com
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: var(--gold);">
            <i class="far fa-clock"></i> Open from Sunset to Sunrise
        </div>
    `;

    contentDiv.appendChild(title);
    contentDiv.appendChild(text);
    contentDiv.appendChild(infoContainer);
}