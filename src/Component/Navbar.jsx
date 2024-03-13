import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setShowMenu(false); // Hide the menu on item click (if shown)
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <button
            type="button"
            className="md:hidden block text-black hover:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex items-center gap-3 md:order-2 space-x-3 md:space-x-3 `}
        >
          <button
            type="button"
            className="text-black bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-medium rounded-3xl text-sm px-4 py-2 text-center"
          >
            Donate
          </button>
          <button
            type="button"
            className="text-white bg-black border-2 hover:border-gray-900 hover:bg-white hover:text-black font-medium rounded-3xl text-sm px-4 py-2 text-center"
          >
            Sign Up
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 text-lg ${
                  selectedItem === "Home"
                    ? "font-bold text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700"
                    : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700"
                }`}
                onClick={() => handleItemClick("Home")}
                aria-current={selectedItem === "Home" ? "page" : null}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 md:p-0 text-lg ${
                  selectedItem === "About"
                    ? "font-bold text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700"
                    : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700"
                }`}
                onClick={() => handleItemClick("About")}
                aria-current={selectedItem === "About" ? "page" : null}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 md:p-0 text-lg ${
                  selectedItem === "Contact"
                    ? "font-bold text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700"
                    : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700"
                }`}
                onClick={() => handleItemClick("Contact")}
                aria-current={selectedItem === "Contact" ? "page" : null}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={`md:hidden ${showMenu ? "block" : "hidden"} w-full`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
              to="/"
                className={`block py-2 px-3 md:p-0 text-lg ${
                  selectedItem === "Home"
                    ? "font-bold text-white bg-gray-500"
                    : "text-gray-900"
                } rounded md:bg-transparent md:text-gray-700`}
                onClick={() => handleItemClick("Home")}
                aria-current={selectedItem === "Home" ? "page" : null}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
              to="/about"
                className={`block py-2 px-3 md:p-0 text-lg ${
                  selectedItem === "About"
                    ? "font-bold text-white bg-gray-500"
                    : "text-gray-900"
                } rounded md:bg-transparent md:text-gray-700`}
                onClick={() => handleItemClick("About")}
                aria-current={selectedItem === "About" ? "page" : null}
              >
                About
              </Link>
            </li>
            <li>
              <Link
              to="/contact"
                className={`block py-2 px-3 md:p-0 text-lg ${
                  selectedItem === "Contact Us"
                    ? "font-bold text-white bg-gray-500"
                    : "text-gray-900"
                } rounded md:bg-transparent md:text-gray-700`}
                onClick={() => handleItemClick("Contact Us")}
                aria-current={selectedItem === "Contact Us" ? "page" : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
