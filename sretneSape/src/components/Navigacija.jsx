import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/slike/paws2.png";

function Navigacija({ action }) {
  const user = useContext(useContext);

  return (
    <nav className=" w-full flex justify-between  px-10 py-10  border-b-2 border-black-45 font-pt-sans-narrow  text-2xl text-black-45  ">
      <div className=" w-full flex items-center justify-between">
        <ul className=" hidden md:flex gap-[30px]   ">
          <li>
            <NavLink
              to={"/"}
              className=" text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              O NAMA
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/popis"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              POPIS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donacije"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              DONACIJE
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/obavijesti"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              OBAVIJESTI
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/unos"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60 "
            >
              UNOS
            </NavLink>
          </li>
        </ul>
        <ul className=" hidden md:flex items-center gap-[14px] hover:text-black-45/60">
          <label htmlFor="admin" className=" cursor-pointer  ">
            ADMIN
          </label>
          <input
            id="admin"
            alt="elipsa"
            type="checkbox"
            value={user}
            checked={user}
            onChange={action}
            className="w-8 h-8 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer hover:black-45/60"
          />
        </ul>
      </div>
      <NavLink to={"/"} className="w-8 h-8 absolute md:hidden ">
        <img src={logo} alt="logo" />
      </NavLink>
      <button className="space-y-1 group md:hidden">
        <div className="w-6 h-1  bg-black-45 "></div>
        <div className="w-6 h-1 bg-black-45 "></div>
        <div className="w-6 h-1 bg-black-45 "></div>

        {/* menu */}
        <ul className="z-10 w-screen bg-gray-61 pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
          <button className="px-10 py-8 relative ml-auto">
            <div className="w-6 h-1 rotate-45 absolute bg-black-45"></div>
            <div className="w-6 h-1 -rotate-45 absolute bg-black-45"></div>
          </button>
          <li>
            <NavLink
              to={"/"}
              className=" text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              O NAMA
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/popis"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              POPIS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donacije"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              DONACIJE
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/obavijesti"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
            >
              OBAVIJESTI
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/unos"}
              className="text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60 "
            >
              UNOS
            </NavLink>
          </li>
          <li className="flex gap-2 items-center justify-center ">
            <label htmlFor="admin" className=" cursor-pointer  ">
              ADMIN
            </label>
            <input
              id="admin"
              alt="elipsa"
              type="checkbox"
              value={user}
              checked={user}
              onChange={action}
              className=" w-8 h-8 max-[1022px]:w-6 max-[1022px]:h-6 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer hover:black-45/60"
            />
          </li>
        </ul>
      </button>
    </nav>
  );
}

export default Navigacija;
