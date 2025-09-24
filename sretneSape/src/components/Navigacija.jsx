import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/slike/paws2.png";
import { UserContext } from "../context/UserContext";

function Navigacija({ action }) {
  const user = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between px-10 py-10 border-b-2 border-black-45 font-pt-sans-narrow text-2xl text-black-45 relative">
      {/* Logo */}
      <NavLink to="/" className="w-8 h-8 md:hidden">
        <img src={logo} alt="logo" />
      </NavLink>

      {/* Desktop menu */}
      <div className="hidden md:flex w-full justify-between items-center">
        <ul className="flex gap-[30px]">
          <li>
            <NavLink
              to="/"
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              O NAMA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popis"
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              POPIS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donacije"
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              DONACIJE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/obavijesti"
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              OBAVIJESTI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/unos"
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              UNOS
            </NavLink>
          </li>
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

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="space-y-1 md:hidden flex flex-col justify-center"
        aria-label="Menu"
      >
        <div className="w-6 h-1 bg-black-45"></div>
        <div className="w-6 h-1 bg-black-45"></div>
        <div className="w-6 h-1 bg-black-45"></div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="z-20 w-screen bg-gray-61 pb-10 absolute top-0 right-0 flex flex-col space-y-3 p-6">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              O NAMA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popis"
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              POPIS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donacije"
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              DONACIJE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/obavijesti"
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              OBAVIJESTI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/unos"
              onClick={() => setMenuOpen(false)}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              UNOS
            </NavLink>
          </li>
          <li className="flex gap-2 items-center justify-center">
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
      )}
    </nav>
  );
}

export default Navigacija;
