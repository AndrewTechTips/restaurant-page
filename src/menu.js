export default function loadMenu() {
    
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const headLine = document.createElement("h1");
    headLine.textContent = "Our Menu";

    const list = document.createElement("ul");

    const item1 = document.createElement("li");
    const item2 = document.createElement("li");

    item1.textContent = "Pizza - 6 $";
    item2.textContent = "Pasta - 5 $";

    list.appendChild(item1);
    list.appendChild(item2);

    contentDiv.appendChild(headLine);
    contentDiv.appendChild(list);
    

}