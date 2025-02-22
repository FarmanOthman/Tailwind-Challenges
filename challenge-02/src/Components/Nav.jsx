import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-bookmark.svg'
const Nav = () => {
  return (
    <nav className=" flex justify-around flex-row-reverse bg-white p-6">
        <div className="flex items-center text-black mr-6 justify-between flex-row-reverse">
          <NavLink to="/" className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">Content</NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">Pricing</NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">Future</NavLink>
        </div>
        <img src={logo} alt="Logo" className="h-8  max-sm:pl-4" />
      </nav>
  )
}

export default Nav