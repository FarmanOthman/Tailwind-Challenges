# 💰 Challenge 04: Pricing Table

## 🎯 Challenge Overview
Build a modern, responsive pricing table that effectively communicates different plan tiers and their features using Tailwind CSS.

## 🎨 Features
- **Responsive Grid:** Adapts to all screen sizes
- **Popular Plan Highlight:** Featured tier emphasis
- **Interactive Elements:** Hover states and CTAs
- **Feature Comparison:** Clear feature differentiation
- **Monthly/Annual Toggle:** Price switching functionality

## 🛠️ Technologies Used
- React + Vite
- Tailwind CSS
- React Icons
- Framer Motion (for subtle animations)

## 📸 Preview
![Desktop View](./public/pricing-desktop.png)
![Mobile View](./public/pricing-mobile.png)

## 🔑 Key Learning Points
- Grid system implementation
- Price toggle functionality
- Feature comparison layout
- Visual hierarchy
- Responsive design patterns

## 💻 Code Highlights
```jsx
// Pricing card component with Tailwind
const pricingClasses = {
  card: "relative p-6 bg-white rounded-2xl shadow-xl",
  popular: "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
  features: "space-y-4 mt-8",
  cta: "w-full py-3 mt-8 rounded-lg font-semibold transition-colors duration-200"
};
```

## 🚀 Getting Started
1. Navigate to the challenge directory:
   ```bash
   cd challenge-04
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
- ✅ Price toggle functionality
- ✅ Feature comparison
- ✅ Popular plan highlight
- ✅ Clear CTAs
- ✅ Accessible design

## 🎨 Design Elements
- **Color Scheme**
  - Primary: Blue/Purple gradient
  - Secondary: Neutral grays
  - Accent: Success green
  
- **Typography**
  - Price: Large, bold display
  - Features: Clean, readable text
  - CTAs: Bold, attention-grabbing

- **Spacing**
  - Consistent padding
  - Clear visual hierarchy
  - Comfortable reading space

## 📊 Plan Structure
- Basic Plan
  - Essential features
  - Budget-friendly
  - Individual use

- Pro Plan (Popular)
  - Advanced features
  - Best value
  - Small teams

- Enterprise Plan
  - All features
  - Priority support
  - Large organizations

## 🎓 Additional Resources
- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Pricing Page Best Practices](https://www.smashingmagazine.com/2020/11/pricing-page-design-best-practices/)
- [Color Theory in UI](https://material.io/design/color/the-color-system.html)
