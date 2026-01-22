export default function loadContact() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    const text = document.createElement("p");
    text.textContent = "We are hidden in plain sight. Reservations are essential.";

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("contact-info");

    infoContainer.innerHTML = `
        <p>📍 <strong>Address:</strong> 123 Shadow Avenue, Moonlight District</p>
        <p>📞 <strong>Phone:</strong> +1 (555) 000-DARK</p>
        <p>✉️ <strong>Email:</strong> reserve@midnightlounge.com</p>
        <div style="margin-top: 20px; font-size: 0.9em; color: #ffd700;">
            *Open from Sunset to Sunrise
        </div>
    `;

    contentDiv.appendChild(title);
    contentDiv.appendChild(text);
    contentDiv.appendChild(infoContainer);
}