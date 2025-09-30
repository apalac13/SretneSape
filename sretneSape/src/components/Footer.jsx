import paws_light from "../assets/paws_light.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const socialsItems = [
    { name: "instagram", src: instagram },
    { name: "facebook", src: facebook },
    { name: "twitter", src: twitter },
    { name: "youtube", src: youtube },
  ];
  const navigationItems = [
    { name: "O NAMA", link: "/" },
    { name: "POPIS", link: "/popis" },
    { name: "DONACIJE", link: "/donacije" },
    { name: "OBAVIJESTI", link: "/obavijesti" },
    { name: "UNOS", link: "/unos" },
  ];

  return (
    <div className="w-full flex flex-col h-[360px]  bg-red-51 ">
      <div className="flex flex-col  bg-red-51 font-pt-sans-narrow mb-5 px-60 max-[1022px]:px-10 pt-10">
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
              {socialsItems.map((socialItem, index) => (
                <img
                  key={index}
                  src={socialItem.src}
                  alt={socialItem.name}
                  width={30}
                  height={30}
                  className="bg-red-51"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-evenly text-gray-61 bg-red-51">
            <p className=" text-6xl bg-red-51">Menu</p>
            <div className="flex flex-col text-2xl cursor-pointer bg-red-51">
              {navigationItems.map((item) => (
                <NavLink key={item.link} to={item.link} className="bg-red-51">
                  <p>{item.name}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-61">
        <p
          className="text-gray-61 w-full text-[12px] font-thin font-sans
             bg-red-51 "
        >
          © Copyright 2024 Designed and Developed by Ana
        </p>
      </div>
    </div>
  );
}
