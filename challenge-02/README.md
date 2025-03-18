# 🎴 Challenge 02: Modern Card UI

## 🎯 Challenge Overview
Design and implement a collection of modern, interactive card components with smooth hover effects and elegant transitions using Tailwind CSS.

## 🎨 Features
- **Hover Effects:** Subtle elevation and transform animations
- **Modern Design:** Clean typography and spacing
- **Interactive Elements:** Clickable areas with feedback
- **Gradient Accents:** Beautiful color transitions
- **Responsive Layout:** Adapts to different screen sizes

## 🛠️ Technologies Used
- React + Vite
- Tailwind CSS
- CSS Grid/Flexbox

## 📸 Preview
![Card Grid View](./public/cards-preview.png)
![Hover Effects](./public/hover-preview.png)

## 🔑 Key Learning Points
- Advanced Tailwind CSS utilities
- CSS transforms and transitions
- Box shadow techniques
- Color gradient management
- Component composition

## 💻 Code Highlights
```jsx
// Example card component with Tailwind classes
const cardClasses = {
  wrapper: "transform hover:-translate-y-1 transition-all duration-300",
  card: "bg-white rounded-xl shadow-lg hover:shadow-xl p-6",
  gradient: "bg-gradient-to-r from-blue-500 to-purple-500"
};
```

## 🚀 Getting Started
1. Navigate to the challenge directory:
   ```bash
   cd challenge-02
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Requirements Checklist
- ✅ Smooth hover animations
- ✅ Responsive grid layout
- ✅ Consistent spacing
- ✅ Optimized performance
- ✅ Accessible design

## 🎨 Design Elements
- Typography: Modern sans-serif fonts
- Colors: Vibrant gradients and neutral backgrounds
- Spacing: Consistent padding and margins
- Shadows: Layered elevation effects

## 🎓 Additional Resources
- [Tailwind CSS Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Modern Card Design Inspiration](https://dribbble.com/tags/card_ui)
