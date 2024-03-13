import Navigacija from "./Navigacija";
import Footer from "./Footer";
import Trazim from "./donacijeComponents/Trazim";
import { useState, useEffect } from "react";

function Donacije() {
  return (
    <div>
      <div className=" flex flex-col mt-36 mb-56 mx-16 font-pt-sans-narrow ">
        <button className="w-[200px] h-[55px] border border-red-51 bg-red-51 text-gray-61 font-pt-sans-narrow text-xl mb-16">
          NOVA DONACIJA
        </button>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-2 ">
            <p className="self-start text-3xl text-red-51">TRAŽIMO:</p>
            <Trazim />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donacije;
