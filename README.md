<h1 align="center">🚀 Tailwind CSS Challenges</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-React-blueviolet?style=for-the-badge" alt="Vite with React">
  <img src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</p>

<p align="center">
  This project is designed to help you practice Tailwind CSS by building various UI components and layouts using <b>Vite with React</b>. Each challenge focuses on different aspects of Tailwind, from basic styling to advanced responsive designs.
</p>

---

## 📌 Challenge List

### Level 1: Basic Components
✅ **Responsive Navbar** – A flexible navigation bar with a mobile dropdown.  
✅ **Modern Card UI** – A stylish card with hover effects.  
✅ **Login Form** – A simple login form with validation styling.  
✅ **Pricing Table** – A three-plan pricing table.  

### Level 2: Advanced Components
⚡ **Dashboard Layout** – A UI with a sidebar and content area.  
⚡ **Accordion FAQ** – A collapsible FAQ section with animations.  
⚡ **Testimonial Slider** – A dynamic slider with Tailwind and JavaScript.  
⚡ **Product Page** – An e-commerce product page with an image gallery.  

### Level 3: Full UI Designs
🚀 **Landing Page Clone** – Recreate a popular website like Netflix or Airbnb.  
🚀 **Dark Mode Toggle** – Implement Tailwind’s dark mode.  
🚀 **Admin Dashboard** – A dashboard with charts and stats.  
🚀 **Portfolio Website** – Build a personal portfolio with animations.  

---

## 🛠 Setup Instructions

```sh
# Clone the repository
git clone <your-repo-url>
cd tailwind-challenges

# Install dependencies
npm install

# Navigate to a challenge folder and create a new Vite project
cd challenge-01
npm create vite@latest . -- --template react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure Tailwind
Edit `tailwind.config.js` and update the content paths:
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```sh
# Start the development server
npm run dev
```

---

## 🤝 Contributions
💡 Feel free to fork this repo and try out the challenges! You can also suggest new challenges or improvements. 🚀

---

## 📜 License
This project is open-source and available under the **MIT License**.

<p align="center">Made with ❤️ using <b>Vite + React + Tailwind CSS</b></p>

