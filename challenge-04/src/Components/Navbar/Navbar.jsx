import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";
import logo from '../../assets/Images/Logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenuOnClickOutside = (event) => {
    if (!event.target.closest("nav")) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenuOnClickOutside);
    return () => {
      window.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, []);

  return (
    <nav className="text-black p-4 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="h-8 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center ">
          <DropdownMenu />
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none relative ml-4"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            {/* Hamburger Icon (Menu) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* Close Icon (X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 absolute top-0 left-0 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer" onClick={() => navigate("/Hotels")}>
            Hotels
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/Flight")}>
            Flight
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/Booking")}>
            Booking
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:-ml-20 md:flex items-center space-x-6 md:space-x-4">
          <button
            className="text-black hover:bg-gray-200 px-4 py-1 rounded transition duration-300 ease-in-out"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="border-2 border-gray-500 text-black px-4 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out"
            onClick={() => navigate("/Signup")}
          >
            Sign up
          </button>
          <DropdownMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-5 mx-4 py-4">
          {/* Mobile Menu Items */}
          <ul className="space-y-3 px-4">
            <li>
              <button
                className="w-full text-left text-gray-700 active:scale-95 active:bg-gray-100 px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out"
                onClick={() => navigate("/Hotels")}
              >
                Hotels
              </button>
            </li>
            <li>
              <button
                className="w-full text-left text-gray-700 active:scale-95 active:bg-gray-100 px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out"
                onClick={() => navigate("/Flight")}
              >
                Flight
              </button>
            </li>
            <li>
              <button
                className="w-full text-left text-gray-700 active:scale-95 active:bg-gray-100 px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out"
                onClick={() => navigate("/Booking")}
              >
                Booking
              </button>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-6 border-t border-gray-200 pt-4 px-4 space-y-3">
            <button
              className="w-full text-center text-black active:scale-95 active:bg-gray-100 px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out hover:bg-gray-200 focus:outline-none"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="w-full text-center text-black border-2 border-gray-500 active:scale-95 active:bg-gray-100 px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out hover:bg-gray-200 focus:outline-none"
              onClick={() => navigate("/Signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
