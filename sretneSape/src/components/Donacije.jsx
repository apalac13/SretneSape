import Trazim from "./donacijeComponents/Trazim";
import NudiSe from "./donacijeComponents/NudiSe";
import Donirano from "./donacijeComponents/Donirano";
import FormDonacija from "./donacijeComponents/FormDonacija";
import userContext from "./userContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

function Donacije() {
  const user = useContext(userContext);
  const [osvjezi, postaviOsvjezi] = useState(true);
  const [donacija, postaviDonaciju] = useState(false);
  const [novaDonacija, postaviNovuDonaciju] = useState({
    tip: "",
    vrijednost: "",
    opis: "",
  });

  console.log(donacija);

  return (
    <div>
      <div className=" flex flex-col mt-36 mb-56 mx-16 font-pt-sans-narrow ">
        <div className="flex gap-20">
          <button
            onClick={() => postaviDonaciju(!donacija)}
            className="flex items-center justify-center  w-[200px] h-[55px] border border-red-51 bg-red-51 text-gray-61 font-pt-sans-narrow text-xl mb-16"
          >
            NOVA DONACIJA
          </button>
          {donacija && (
            <FormDonacija
              user={user}
              osvjezi={osvjezi}
              postaviOsvjezi={postaviOsvjezi}
              novaDonacija={novaDonacija}
              postaviNovuDonaciju={postaviNovuDonaciju}
            />
          )}
        </div>
        <div className="flex flex-col  gap-8 ">
          <div className="flex flex-col gap-2 ">
            <p className="self-start text-3xl text-red-51">TRAŽIMO:</p>
            <Trazim
              user={user}
              osvjezi={osvjezi}
              postaviOsvjezi={postaviOsvjezi}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="self-start text-3xl text-red-51">NUDI SE:</p>
            <NudiSe
              user={user}
              osvjezi={osvjezi}
              postaviOsvjezi={postaviOsvjezi}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="self-start text-3xl text-red-51">DONIRANO:</p>
            <Donirano
              user={user}
              osvjezi={osvjezi}
              postaviOsvjezi={postaviOsvjezi}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donacije;
