import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/logo-bookmark.svg'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center bg-white p-6">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      
      <div className="md:flex hidden items-center space-x-6 text-black">
        <NavLink to="/" className="nav-link" activeClassName="active">Login</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">Content</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">Pricing</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">Future</NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white p-6 space-y-4 shadow-md">
          <NavLink to="/" className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">Content</NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">Pricing</NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">Future</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Nav
