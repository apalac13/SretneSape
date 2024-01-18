import { Link } from "react-router-dom";
import krug from "../assets/ellipse1.svg";
function Navigacija({ transparentno, item }) {
  return (
    <nav
      className={
        transparentno
          ? "bg-transparent w-full flex   justify-between  px-10 py-10   font-sans text-[40px]  text-black-45"
          : " w-full flex  justify-between  px-10 py-10 border-b-2 border-black-45 font-sans text-[40px] text-black-45"
      }
    >
      <ul
        className={
          transparentno
            ? "bg-transparent flex gap-[30px] "
            : "flex gap-[30px]  "
        }
      >
        <li className={transparentno ? "bg-transparent " : " "}>
          <Link to={"/"} className={transparentno ? "bg-transparent " : " "}>
            O NAMA
          </Link>
        </li>
        <li className={transparentno ? "bg-transparent " : " "}>
          <Link
            to={"/popis"}
            className={`${transparentno ? "bg-transparent " : " "} ${
              item == "popis"
                ? "text-black-45/60 hover:border-b-2 border-black-45/60"
                : "text-black-45 hover:border-b-2 border-black-45"
            }`}
          >
            POPIS
          </Link>
        </li>
        <li className={transparentno ? "bg-transparent " : " "}>
          <Link
            to={"/donacije"}
            className={`${transparentno ? "bg-transparent " : " "} ${
              item == "donacije"
                ? "text-black-45/60 hover:border-b-2 border-black-45/60"
                : "text-black-45 "
            }`}
          >
            DONACIJE
          </Link>
        </li>
        <li className={transparentno ? "bg-transparent " : ""}>
          <Link
            to={"/obavijesti"}
            className={`${transparentno ? "bg-transparent " : " "} ${
              item == "obavijesti" ? "text-black-45/60" : "text-black-45"
            }`}
          >
            OBAVIJESTI
          </Link>
        </li>
        <li className={transparentno ? "bg-transparent " : " "}>
          <Link
            to={"/unos"}
            className={`${transparentno ? "bg-transparent " : " "} ${
              item == "unos" ? "text-black-45/60" : "text-black-45"
            }`}
          >
            UNOS
          </Link>
        </li>
      </ul>
      <ul
        className={
          transparentno
            ? "bg-transparent flex items-center gap-[14px]"
            : "flex items-center gap-[14px]"
        }
      >
        <li className={transparentno ? "bg-transparent " : " "}>ADMIN</li>
        <img
          src={krug}
          alt="elipsa"
          className={
            transparentno
              ? "bg-transparent w-[35px] h-[35px] cursor-pointer "
              : " w-[35px] h-[35px] cursor-pointer"
          }
        />
      </ul>
    </nav>
  );
}

export default Navigacija;
