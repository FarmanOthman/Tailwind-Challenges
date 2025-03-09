import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Left Section (Menu) */}
      <div className="flex items-center backdrop-blur-sm bg-white/10 rounded-l-lg gap-16 py-7">
        <div>
          <a href="#" className="text-sm">Menu</a>
          <img sr alt="" />
        </div>
        <a href="">instructions</a>
      </div>

      {/* Center Section (ASTRO.) */}
      <div className="flex items-center">
        <a href="#" className="text-xl font-bold">ASTRO.</a>
      </div>

      {/* Right Section (Institute) */}
      <div className="flex items-center backdrop-blur-sm bg-white/10 rounded-r-lg p-2">
        <a href="#" className="text-xl font-bold">Institute</a>
      </div>
    </nav>
  )
}

export default Navbar

