export default function loadMenu() {
    
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Exquisite Menu";
    contentDiv.appendChild(title);
    
    const menuItems = [
        { name: "Eclipse Truffle Risotto", desc: "Black rice, gold leaf, wild mushrooms", price: "$28" },
        { name: "Nebula Salmon", desc: "Smoked with cherry wood, asparagus foam", price: "$32" },
        { name: "Stardust Tiramisu", desc: "Espresso soaked savoiardi, mascarpone cloud", price: "$14" }
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        const details = document.createElement("div");
        details.style.textAlign = "left";

        const name = document.createElement("h3");
        name.textContent = item.name;

        const desc = document.createElement("div");
        desc.textContent = item.desc;
        desc.style.fontSize = "0.9rem";
        desc.style.color = "#aaa";

        details.appendChild(name);
        details.appendChild(desc);

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = item.price;

        itemDiv.appendChild(details);
        itemDiv.appendChild(price);
        contentDiv.appendChild(itemDiv);
    })

}