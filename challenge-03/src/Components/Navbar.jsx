import React from 'react'
import menuIcon from '../assets/Images/Menu icon.svg'
import downArrow from '../assets/Images/arrow down.svg'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Left Section (Menu) */}
      <div className="flex pentagonLeft items-center backdrop-blur-sm bg-white/10 rounded-l-lg gap-16 py-6 px-[4.5rem]">
        <div>
          <div className='flex items-center gap-5'>
            <img src={menuIcon} alt="menuIcon" />
            <a href="#" className="text-sm">Menu</a>
          </div>
        </div>
        <div className='flex items-center gap-2'>
            <a href="#" className="text-sm">Instraction</a>
            <img src={downArrow} alt="arrowIcon" />
          </div>
      </div>

      {/* Center Section (ASTRO.) */}
      <div className="flex items-center">
        <a href="#" className="text-xl font-bold">ASTRO.</a>
      </div>

      {/* Right Section (Institute) */}
      <div className="flex pentagonRight items-center backdrop-blur-sm bg-white/10 rounded-r-lg gap-16 py-7 px-[4.5rem]">
        <a href="#" className="text-sm ">home</a>
        <div className='flex items-center gap-2'>
            <a href="#" className="text-sm">Achivment</a>
            <img src={downArrow} alt="arrowIcon" />
          </div>
      </div>
    </nav>
  )
}

export default Navbar

