import paws_light from "../assets/paws_light.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div className="w-full flex flex-col h-[360px]  bg-red-51 px-60 max-[1022px]:px-10 pt-10">
      <div className="flex flex-col  bg-red-51 font-pt-sans-narrow mb-5">
        <div className="flex justify-between bg-red-51 ">
          <div className="flex flex-col gap-11 bg-red-51 ">
            <NavLink to={"/"}>
              <img
                src={paws_light}
                alt="paws"
                className=" w-56 h-56 bg-red-51"
              />
            </NavLink>
            <div className="flex gap-3 hover:cursor-pointer bg-red-51">
              <img
                src={instagram}
                alt="instagram"
                width={30}
                height={30}
                className="bg-red-51"
              />
              <img
                src={facebook}
                alt="facebook"
                width={30}
                height={30}
                className="bg-red-51"
              />
              <img
                src={twitter}
                alt="twitter"
                width={30}
                height={30}
                className="bg-red-51"
              />
              <img
                src={youtube}
                alt="youtube"
                width={30}
                height={30}
                className="bg-red-51"
              />
            </div>
          </div>
          <div className="flex flex-col justify-evenly text-gray-61 bg-red-51">
            <p className=" text-6xl bg-red-51">Menu</p>
            <div className="flex flex-col text-2xl cursor-pointer bg-red-51">
              <NavLink to={"/"} className="bg-red-51">
                O NAMA
              </NavLink>
              <NavLink to={"/popis"} className="bg-red-51">
                POPIS
              </NavLink>
              <NavLink to={"/donacije"} className="bg-red-51">
                DONACIJE
              </NavLink>
              <NavLink to={"/obavijesti"} className="bg-red-51">
                OBAVIJESTI
              </NavLink>
              <NavLink to={"/unos"} className="bg-red-51">
                UNOS
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <hr className="bg-red-61 " />
          <p
            className="text-gray-61 text-[12px] font-thin font-sans
           bg-red-51 "
          >
            © Copyright 2024 Designed and Developed by Ana Palac
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
