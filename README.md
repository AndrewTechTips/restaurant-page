<div align="center">
  <h1>🌙 Midnight Lounge</h1>
  
  <p>
    An elegant, atmosphere-driven <strong>Restaurant Landing Page</strong>. 
    Built to demonstrate <strong>Webpack Module Bundling</strong> and <strong>Dynamic DOM Manipulation</strong> 
    wrapped in a sophisticated dark glassmorphism design.
  </p>
  <p>
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
    <img src="https://img.shields.io/badge/JavaScript-ES6_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  </p>
  <h3>
    <a href="https://andrewtechtips.github.io/restaurant-page/">🍸 ENTER THE LOUNGE</a>
  </h3>
</div>

<br />

---

## ✨ Features

* **🥃 Glassmorphism Aesthetic:** Frosted glass panels with `backdrop-filter: blur()` creating depth and luxury.
* **🎭 Tab-Based Navigation:** Seamless single-page experience with ES6 modules - no page reloads.
* **📦 Webpack-Powered Build:** Modern bundling with HtmlWebpackPlugin, CSS loaders, and hot module replacement.
* **🎨 Premium Typography:** Elegant serif (Playfair Display) combined with clean sans-serif (Lato).
* **📱 Responsive Design:** Fluid adaptation from mobile to desktop with percentage-based layouts.

---

## 🧩 Under the Hood

This project showcases **modular JavaScript** development using ES6 import/export syntax, all orchestrated by Webpack.

### Module Structure

Each page lives in its own module with clean separation:

```javascript
// home.js - Dynamically generates the landing page
export default function loadHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    const title = document.createElement("h1");
    title.textContent = "Midnight Lounge";
    
    contentDiv.appendChild(title);
}
```

### Navigation Controller

```javascript
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

navButtons.forEach(button => {
    button.addEventListener("click", e => {
        const id = e.target.id;
        if (id === "home-btn") loadHome();
        if (id === "menu-btn") loadMenu();
        if (id === "contact-btn") loadContact();
    });
});
```

---

## 🛠️ Technologies Used

* **[Webpack 5](https://webpack.js.org/)** - Module bundler with dev server
* **[Font Awesome 6](https://fontawesome.com/)** - Icon library
* **[Google Fonts](https://fonts.google.com/)** - Playfair Display & Lato typography
* **[GitHub Pages](https://pages.github.com/)** - Deployment via `gh-pages` package

---

## 🚀 Getting Started

### Prerequisites
Node.js (v14+) and npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/AndrewTechTips/restaurant-page.git
cd restaurant-page

# Install dependencies
npm install

# Start development server (opens at localhost:8080)
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📬 Contact

If you want to contact me, you can reach me at:

* **LinkedIn:** www.linkedin.com/in/andrei-condrea-b32148346
* **Email:**  condrea.andrey777@gmail.com

<p align="center">
    <i>"Where flavor meets atmosphere, under the veil of night." 🌙🍷</i>
</p>