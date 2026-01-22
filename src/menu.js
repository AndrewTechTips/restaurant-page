export default function loadMenu() {
    
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Our Selection";
    contentDiv.appendChild(title);
    
    const starters = [
        { name: "Velvet Crab Bisque", desc: "Slow-cooked crustacean broth, cognac cream, chives.", price: "$18" },
        { name: "Moonlight Carpaccio", desc: "Thinly sliced wagyu beef, truffle oil, parmesan snow.", price: "$24" },
        { name: "Golden Beet Salad", desc: "Roasted beets, goat cheese mousse, candied walnuts.", price: "$16" }
    ];

    const mains = [
        { name: "Eclipse Truffle Risotto", desc: "Arborio rice, squid ink, 24k gold leaf, wild mushrooms.", price: "$34" },
        { name: "Nebula Salmon", desc: "Cedar-plank smoked, asparagus foam, caviar pearls.", price: "$38" },
        { name: "Midnight Steak", desc: "Dry-aged ribeye, rosemary smoke, red wine reduction.", price: "$55" },
        { name: "Void Pasta", desc: "Handmade tagliatelle, black garlic sauce, confit tomatoes.", price: "$29" }
    ];

    const desserts = [
        { name: "Stardust Tiramisu", desc: "Espresso soaked savoiardi, mascarpone cloud, cocoa dust.", price: "$14" },
        { name: "Dark Matter Cake", desc: "Flourless chocolate cake, raspberry coulis, vanilla bean ice cream.", price: "$16" }
    ];

    const createSection = (sectionTitle, items) => {

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = sectionTitle;
        categoryTitle.className = "menu-category";
        contentDiv.appendChild(categoryTitle);

        items.forEach( (item, index) => {

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");

            const details = document.createElement("div");

            const name = document.createElement("h3");
            name.textContent = item.name;
            name.style.marginBottom = "5px";

            const desc = document.createElement("div");
            desc.textContent = item.desc;
            desc.style.fontSize = "0.95rem";
            desc.style.color = "#ccc";
            desc.style.lineHeight = "1.4";

            details.appendChild(name);
            details.appendChild(desc);

            const price = document.createElement("div");
            price.classList.add("price");
            price.textContent = item.price;

            itemDiv.appendChild(details);
            itemDiv.appendChild(price);

            contentDiv.appendChild(itemDiv);

            if (index === items.length - 1) {
                itemDiv.classList.add("last");
            }
        });
    };


    createSection("Starters", starters);
    createSection("Main Courses", mains);
    createSection("Sweets", desserts);
}