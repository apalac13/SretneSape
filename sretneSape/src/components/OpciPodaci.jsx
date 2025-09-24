import { Link } from "react-router-dom";
import ONama from "./opciPodaciComponents/ONama";

function OpciPodaci() {

  return (
    <div>
      <div className="relative bg-image bg-cover bg-no-repeat bg-center bg-blend-darken brightness-50 w-lvh h-lvh  "></div>
      <div className="absolute  top-2/4 left-2/4  lg:translate-x-1/4 max-[1022px]:-translate-x-1/2 translate-y-2/4  bg-transparent max-w-[400px] ">
        <p className=" bg-transparent font-pt-serif max-[1022px]:text-2xl  text-4xl text-gray-61  ">
          Izaberi svog ljubimca i kreni u igru
        </p>
        <Link to={"/popis"} className=" bg-red-51 hover:bg-black-45">
          <button className=" mt-8 w-[200px] h-[80px] max-[1022px]:w-40 max-[1022px]:h-16   font-pt-sans-narrow bg-red-51 text-gray-61 max-[1022px]:text-xl  text-2xl border border-red-51 hover:bg-black-45 ">
            UDOMI ME
          </button>
        </Link>
      </div>
      <ONama />
    </div>
  );
}

export default OpciPodaci;
