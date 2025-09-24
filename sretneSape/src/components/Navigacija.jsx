import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/slike/paws2.png";

function Navigacija({ action }) {
  const user = useContext(useContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "O NAMA" },
    { to: "/popis", label: "POPIS" },
    { to: "/donacije", label: "DONACIJE" },
    { to: "/obavijesti", label: "OBAVIJESTI" },
    { to: "/unos", label: "UNOS" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-300 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:py-5">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-800 hover:text-gray-600 ${
                    isActive ? "font-bold border-b-2 border-gray-600" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <label htmlFor="admin" className="cursor-pointer">
              ADMIN
            </label>
            <input
              id="admin"
              type="checkbox"
              checked={user}
              onChange={action}
              className="w-6 h-6 rounded-full border border-gray-500 cursor-pointer checked:bg-gray-800"
            />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 w-full px-4 py-6 flex flex-col gap-4 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-gray-600 text-lg font-medium"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2 mt-4">
            <label htmlFor="admin" className="cursor-pointer">
              ADMIN
            </label>
            <input
              id="admin"
              type="checkbox"
              checked={user}
              onChange={action}
              className="w-6 h-6 rounded-full border border-gray-500 cursor-pointer checked:bg-gray-800"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigacija;
