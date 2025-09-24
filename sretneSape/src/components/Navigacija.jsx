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
    <nav className="w-full flex justify-between px-6 md:px-10 py-6 border-b-2 border-black-45 font-pt-sans-narrow text-2xl text-black-45 relative">
      {/* Logo */}
      <NavLink to="/" className="w-8 h-8 md:hidden">
        <img src={logo} alt="logo" />
      </NavLink>

      {/* Desktop menu */}
      <div className="hidden md:flex w-full justify-between items-center">
        <ul className="flex gap-[30px]">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[14px]">
          <label htmlFor="admin" className="cursor-pointer">
            ADMIN
          </label>
          <input
            id="admin"
            type="checkbox"
            value={user}
            checked={user}
            onChange={action}
            className="w-8 h-8 border border-solid border-black-45 rounded-full checked:bg-black-45 cursor-pointer"
          />
        </div>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="z-20 md:hidden flex flex-col justify-center items-center"
        aria-label="Menu"
      >
        {menuOpen ? (
          <div className="w-6 h-6 flex flex-col justify-center items-center relative">
            <span className="absolute w-6 h-1 bg-black-45 rotate-45"></span>
            <span className="absolute w-6 h-1 bg-black-45 -rotate-45"></span>
          </div>
        ) : (
          <>
            <div className="w-6 h-1 bg-black-45 mb-1"></div>
            <div className="w-6 h-1 bg-black-45 mb-1"></div>
            <div className="w-6 h-1 bg-black-45"></div>
          </>
        )}
      </button>

      <ul
        className={`z-10 w-screen bg-gray-61 pb-10 absolute top-0 right-0 flex flex-col space-y-3 p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="flex gap-2 items-center justify-center mt-4">
          <label htmlFor="admin" className="cursor-pointer">
            ADMIN
          </label>
          <input
            id="admin"
            type="checkbox"
            value={user}
            checked={user}
            onChange={action}
            className="w-8 h-8 border border-solid border-black-45 rounded-full checked:bg-black-45 cursor-pointer"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigacija;
