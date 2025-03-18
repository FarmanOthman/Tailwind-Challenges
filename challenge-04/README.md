# ✈️ Challenge 04: Travel Website

## Project Overview
A modern travel website featuring destinations, testimonials, and travel categories. Built with React and Tailwind CSS, focusing on beautiful UI and smooth user experience.

## 🛠️ Features Implemented
- **Hero Section:** Engaging travel-themed hero with animations
- **Destinations:** Featured travel locations showcase
- **Categories:** Travel category exploration
- **Easy & Fast:** Feature highlights section
- **Testimonials:** Customer reviews and feedback
- **Newsletter:** Email subscription component
- **Sponsor Section:** Partner showcase
- **Responsive Design:** Mobile-first approach

## 💻 Technical Implementation
```jsx
// Hero Section Example
<div className='h-screen relative'>
  <img src={shape} alt="" className='absolute z-[-10] top-[-9rem] right-0' />
  <div className='flex flex-col md:flex-row justify-evenly items-center h-full'>
    <div className='text-center md:text-left'>
      <h3 className='text-lg md:text-xl font-bold text-red-400'>
        Best Destinations around the world
      </h3>
      <h1 className='font-volkhov mt-6 md:mt-8'>
        <span className='text-5xl md:text-8xl block'>Travel, enjoy</span>
        <span className='text-5xl md:text-8xl block'>and live a new</span>
        <span className='text-5xl md:text-8xl block'>and full life</span>
      </h1>
      {/* CTA Buttons */}
      <div className='flex justify-center md:justify-start items-center gap-4'>
        <button className='hover:bg-orange-600 bg-light-orange text-white px-6 py-3'>
          Find out more
        </button>
        <div className='flex items-center gap-2'>
          <img src={playIcon} alt="" className='hover:cursor-pointer' />
          <p className='text-gray-400'>Play Demo</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 📦 Project Structure
```
src/
├── Components/
│   ├── Home/
│   │   ├── Hero.jsx
│   │   ├── Category.jsx
│   │   ├── Destinations.jsx
│   │   ├── EasyAndFast.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Subscribe.jsx
│   │   └── Sponsor.jsx
│   ├── Navbar/
│   ├── Footer/
│   ├── About/
│   └── NotFound/
├── assets/
│   └── Images/
└── App.jsx
```

## 🎨 Design Features
- **Color Scheme**
  - Primary: Orange (#FF7D68)
  - Secondary: Red (#DF6951)
  - Text: Dark gray and white
  
- **Typography**
  - Headlines: Volkhov font
  - Body: Poppins font
  - Large hero text
  
- **Visual Elements**
  - Custom illustrations
  - Decorative shapes
  - Animated elements
  - Responsive images

## 🚀 Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## 📚 Learning Outcomes
- Component organization
- Responsive design implementation
- Custom font integration
- SVG manipulation
- Animation techniques
- Layout management

## 🔍 Key Components
- **Hero:** Engaging travel-themed header
- **Categories:** Travel type exploration
- **Destinations:** Featured locations
- **Testimonials:** User reviews
- **Subscribe:** Newsletter signup
- **Sponsors:** Partner logos

## 🛠️ Technologies Used
- React + Vite
- Tailwind CSS
- Custom Fonts (Volkhov, Poppins)
- SVG Illustrations
- CSS Animations

## 🎯 Future Enhancements
- Add search functionality
- Implement booking system
- Add user authentication
- Create destination details
- Add interactive map
- Implement dark mode

## 🎓 Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [CSS Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [SVG Animation Techniques](https://css-tricks.com/guide-svg-animations-smil/)
