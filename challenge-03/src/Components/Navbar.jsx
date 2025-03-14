import React, { useState } from 'react';
import menuIcon from '../assets/Images/Menu icon.svg';
import downArrow from '../assets/Images/arrow down.svg';
import closeIcon from '../assets/Images/closeIcon.svg'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-0">
      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex items-center w-full justify-between">
        <div className="flex items-center gap-3">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="menuIcon" className="h-6" />
          </button>
          <span className="text-sm">Menu</span>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">ASTRO.</a>
        </div>
      </div>

      {/* Left Section (Menu) - Visible on Large Screens, Hidden on Small Screens */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex pentagonLeft items-center backdrop-blur-sm bg-white/10 rounded-lg lg:rounded-l-lg lg:rounded-r-none gap-4 lg:gap-16 py-4 lg:py-6 px-6 lg:px-[4.5rem] w-full lg:w-auto mb-4 lg:mb-0`}>
        <div>
          <div className="flex items-center gap-3 lg:gap-5">
            <img src={menuIcon} alt="menuIcon" className="h-5 lg:h-auto" />
            <a href="#" className="text-sm">Menu</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="text-sm">Instructions</a>
          <img src={downArrow} alt="arrowIcon" className="h-3 lg:h-auto" />
        </div>
      </div>

      {/* Center Section (ASTRO.) - Hidden on Small Screens */}
      <div className="hidden lg:flex items-center mb-4 lg:mb-0">
        <a href="#" className="text-xl font-bold">ASTRO.</a>
      </div>

      {/* Right Section (Institute) - Visible on Large Screens, Hidden on Small Screens */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex pentagonRight items-center backdrop-blur-sm bg-white/10 rounded-lg lg:rounded-r-lg lg:rounded-l-none gap-4 lg:gap-16 py-4 lg:py-7 px-6 lg:px-[4.5rem] w-full lg:w-auto`}>
        <a href="#" className="text-sm">Home</a>
        <div className="flex items-center gap-2">
          <a href="#" className="text-sm">Achievement</a>
          <img src={downArrow} alt="arrowIcon" className="h-3 lg:h-auto" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;