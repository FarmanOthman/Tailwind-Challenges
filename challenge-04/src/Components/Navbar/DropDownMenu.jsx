import { useState, useEffect, useRef } from "react";

const DropdownMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="relative list-none" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="focus:outline-none "
      >
        EN &nbsp;&nbsp;
        {dropdownOpen ? "▲" : "▼"}
      </button>

      {dropdownOpen && (
        <ul className="absolute left-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => {
              setDropdownOpen(false);
            }}
          >
            SP
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => {
              setDropdownOpen(false);
            }}
          >
            AR
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
