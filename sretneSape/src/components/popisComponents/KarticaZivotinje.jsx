import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function KarticaZivotinje() {
  const [zivotinja, pronadjiZivotinju] = useState([]);
  const { zivotinjaId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/zivotinje/${zivotinjaId}`)
      .then((rez) => pronadjiZivotinju(rez.data))
      .catch((error) => console.log(error.message));
  }, [zivotinjaId]);

  return (
    <div className="flex justify-center gap-20 mx-10 mt-10">
      <img
        src={`../../../zivotinje/${zivotinja.slika}`}
        alt=""
        className="w-[550px] h-[650px]"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3 items-start w-[400px]  ">
          <div className="flex gap-2 items-end">
            <p className="font-pt-serif text-4xl">Ime: </p>
            <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.ime}</p>
          </div>
          <div className="flex gap-2 items-end ">
            <p className=" font-pt-serif text-4xl">Vrsta: </p>
            <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.vrsta}</p>
          </div>
          <div className="flex gap-2 items-end">
            <p className="font-pt-serif text-4xl">Status: </p>
            <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.status}</p>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="self-start font-pt-serif text-4xl">Opis: </p>
            <p className=" text-start font-pt-sans-narrow ">{zivotinja.opis}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="w-[150px] h-[50px] border border-red-51 bg-red-51 text-gray-61 font-pt-sans-narrow text-xl  ">
            UDOMI
          </button>
          <button className="w-[150px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-xl ">
            UREDI
          </button>
        </div>
      </div>
    </div>
  );
}

export default KarticaZivotinje;
