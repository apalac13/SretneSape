import { React, useRef } from "react";
import { useState } from "react";
import Navigacija from "./Navigacija";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ONama from "./opciPodaciComponents/ONama";

function OpciPodaci(props) {
  const [oNama, postaviOnama] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-48  bg-image bg-cover bg-no-repeat bg-blend-multiply  w-full h-[700px] ">
        <Navigacija
          transparentno={() => {
            postaviOnama(true);
          }}
        />
        <div className="w-[480px] self-end">
          <p className=" font-pt-serif text-[45px] text-white-70">
            Izaberi svog ljubimca
          </p>

          <Link to={"/popis"}>
            <button className="mt-8 w-[250px] h-[90px] font-pt-sans-narrow bg-red-51 text-gray-61 text-[40px] border border-red-51 ">
              UDOMI ME
            </button>
          </Link>
        </div>
      </div>
      <ONama />
      <Footer />
    </div>
  );
}

export default OpciPodaci;
