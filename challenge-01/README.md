# 📱 Challenge 01: Responsive Navbar

## 🎯 Challenge Overview
Create a modern, responsive navigation bar that seamlessly adapts to different screen sizes while maintaining a clean and professional appearance.

## 🎨 Features
- **Responsive Design:** Adapts smoothly from mobile to desktop views
- **Hamburger Menu:** Clean mobile navigation toggle
- **Smooth Transitions:** Elegant animations for menu interactions
- **Dynamic States:** Hover and active states for navigation items
- **Brand Integration:** Logo/brand name prominently displayed

## 🛠️ Technologies Used
- React + Vite
- Tailwind CSS
- React Icons

## 📸 Preview
![Desktop View](./public/desktop-preview.png)
![Mobile View](./public/mobile-preview.png)

## 🔑 Key Learning Points
- Tailwind CSS responsive breakpoints
- Flex and Grid layouts
- State management for menu toggle
- CSS transitions and transforms
- Mobile-first design principles

## 💻 Code Highlights
```jsx
// Key Tailwind classes used
const navClasses = {
  desktop: "hidden md:flex space-x-4",
  mobile: "absolute top-16 left-0 right-0 bg-white md:hidden",
  link: "hover:text-blue-600 transition-colors duration-200"
};
```

## 🚀 Getting Started
1. Navigate to the challenge directory:
   ```bash
   cd challenge-01
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
- ✅ Responsive layout
- ✅ Mobile menu toggle
- ✅ Smooth animations
- ✅ Accessible navigation
- ✅ Cross-browser compatibility

## 🎓 Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons)
- [CSS Tricks - Navigation Patterns](https://css-tricks.com/navigation-patterns)
