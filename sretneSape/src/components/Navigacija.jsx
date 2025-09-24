import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/slike/paws2.png";

function Navigacija({ action, user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "O NAMA" },
    { to: "/popis", label: "POPIS" },
    { to: "/donacije", label: "DONACIJE" },
    { to: "/obavijesti", label: "OBAVIJESTI" },
    { to: "/unos", label: "UNOS" },
  ];

  return (
    <nav className="w-full bg-gray-60 border-b border-black-45 fixed top-0 left-0 z-50 font-pt-sans-narrow  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 md:py-5">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-black-45 hover:text-black-45/70 text-2xl ${
                    isActive ? "font-bold border-b-2 border-black-45" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <label htmlFor="admin" className="cursor-pointer text-2xl">
              ADMIN
            </label>
            <input
              id="admin"
              type="checkbox"
              checked={user}
              onChange={action}
              className="w-7 h-7 rounded-full border border-black-45 cursor-pointer checked:bg-black-45"
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
        <div className="md:hidden bg-gray-60 border-t border-black-45 w-full px-4 py-6 flex flex-col gap-4 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:text-black-45/70 text-lg "
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2 mt-4">
            <label htmlFor="admin" className="cursor-pointer text-lg">
              ADMIN
            </label>
            <input
              id="admin"
              type="checkbox"
              checked={user}
              onChange={action}
              className="w-6 h-6 rounded-full border border-black-45 cursor-pointer checked:bg-black-45"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigacija;
