import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Navigacija({ action }) {
  const user = useContext(useContext);

  return (
    <nav className=" w-full flex  justify-between  px-10 py-10  border-b-2 border-black-45 font-pt-sans-narrow  text-[40px] text-black-45 ">
      <ul className="flex gap-[30px]  ">
        <li>
          <NavLink
            to={"/"}
            className="bg-transparent text-black-45 hover:border-b-2 border-black-45/60 hover:text-black-45/60"
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
      <ul className="flex items-center gap-[14px] hover:text-black-45/60">
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
    </nav>
  );
}

export default Navigacija;
