import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-bookmark.svg';
import Facebook from '../assets/images/icon-facebook.svg';
import Twitter from '../assets/images/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Bookmark Logo" className="h-8" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link_footer active_footer" : "nav-link_footer hover:text-gray-400 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link_footer active_footer" : "nav-link_footer hover:text-gray-400 transition-colors"
            }
          >
            Content
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "nav-link_footer active_footer" : "nav-link_footer hover:text-gray-400 transition-colors"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/future"
            className={({ isActive }) =>
              isActive ? "nav-link_footer active_footer" : "nav-link_footer hover:text-gray-400 transition-colors"
            }
          >
            Future
          </NavLink>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-transform transform hover:scale-105"
          >
            <img src={Facebook} alt="Facebook Logo" className="h-6" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition-transform transform hover:scale-105"
          >
            <img src={Twitter} alt="Twitter Logo" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;