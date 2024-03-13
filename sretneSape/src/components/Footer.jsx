import paws_light from "../assets/paws_light.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div className="w-full flex flex-col h-[385px]  bg-red-51 px-60 pt-10">
      <div className="flex justify-between font-pt-sans-narrow mb-5">
        <div className="flex flex-col gap-11 ">
          <NavLink to={"/"}>
            <img src={paws_light} alt="paws" className=" w-56 h-56" />
          </NavLink>
          <div className="flex gap-3 hover:cursor-pointer">
            <img src={instagram} alt="instagram" width={30} height={30} />
            <img src={facebook} alt="facebook" width={30} height={30} />
            <img src={twitter} alt="twitter" width={30} height={30} />
            <img src={youtube} alt="youtube" width={30} height={30} />
          </div>
        </div>
        <div className=" text-gray-61">
          <p className=" text-[80px]">Menu</p>
          <div className="flex flex-col text-4xl cursor-pointer">
            <NavLink to={"/"}>O NAMA</NavLink>
            <NavLink to={"/popis"}>POPIS</NavLink>
            <NavLink to={"/obavijesti"}>OBAVIJESTI</NavLink>
            <NavLink to={"/unos"}>UNOS</NavLink>
          </div>
        </div>
      </div>
      <hr className="bg-gray-61" />
      <p className="text-gray-61 text-[12px] font-thin font-roboto">
        {" "}
        © Copyright 2024 Designed and Developed by Ana Palac
      </p>
    </div>
  );
}

export default Footer;
