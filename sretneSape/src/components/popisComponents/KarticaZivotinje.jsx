import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function KarticaZivotinje() {
  const [zivotinja, postaviZivotinju] = useState([]);
  const { zivotinjaId } = useParams();
  const [uredi, postaviUredi] = useState(false);
  const items = [
    { label: "Ime", value: zivotinja.ime },
    { label: "Vrsta", value: zivotinja.vrsta },
    { label: "Status", value: zivotinja.status },
    { label: "Opis", value: zivotinja.opis },
  ];
  useEffect(() => {
    axios
      .get(`http://localhost:3001/zivotinje/${zivotinjaId}`)
      .then((rez) => postaviZivotinju(rez.data))
      .catch((error) => console.log(error.message));
  }, [zivotinjaId]);

  function sinkronizirajPromjene() {
    postaviZivotinju((prevZivotinja) => ({
      ...prevZivotinja,
      status: "udomljen",
    }));
  }

  const promijeniStatus = async () => {
    try {
      await axios.patch(`http://localhost:3001/zivotinje/${zivotinjaId}`, {
        status: "udomljen",
      });

      sinkronizirajPromjene();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    if (!uredi) {
      axios.put(`http://localhost:3001/zivotinje/${zivotinja.id}`, zivotinja);
    }
  }, [uredi, zivotinja]);

  function urediPodatke() {
    postaviUredi(!uredi);
  }

  function promjenaPodatka(event) {
    const { name, value } = event.target;
    postaviZivotinju({ ...zivotinja, [name]: value });
  }

  return (
    <div className="flex justify-center gap-20 mx-10 mt-10">
      <img
        src={`../../../zivotinje/${zivotinja.slika}`}
        alt=""
        className="w-[550px] h-[650px]"
      />
      <div className="flex flex-col justify-between">
        {uredi === true ? (
          <div className="flex flex-col gap-3 items-start w-[400px]">
            <label htmlFor="" className="flex gap-2 items-end">
              <p className="font-pt-serif text-4xl">Ime:</p>
              <input
                type="text"
                name="ime"
                value={zivotinja.ime}
                onChange={promjenaPodatka}
                className=" font-pt-sans-narrow text-3xl "
              />
            </label>
            <label htmlFor="" className="flex gap-2 items-end">
              <p className="font-pt-serif text-4xl">Vrsta:</p>
              <input
                type="text"
                name="vrsta"
                value={zivotinja.vrsta}
                onChange={promjenaPodatka}
                className=" font-pt-sans-narrow text-3xl "
              />
            </label>
            <label htmlFor="" className="flex gap-2 items-end">
              <p className="font-pt-serif text-4xl">Status:</p>
              <input
                type="text"
                name="status"
                value={zivotinja.status}
                onChange={promjenaPodatka}
                className=" font-pt-sans-narrow text-3xl "
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-3 ">
              <p className="self-start font-pt-serif text-4xl">Opis:</p>
              <textarea
                type="text"
                name="opis"
                value={zivotinja.opis}
                onChange={promjenaPodatka}
                cols={60}
                className=" text-start font-pt-sans-narrow "
              />
            </label>
          </div>
        ) : (
          <div className="flex flex-col gap-3 items-start w-[400px]  ">
            <div className="flex gap-2 items-end">
              <p className="font-pt-serif text-4xl">Ime: </p>
              <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.ime}</p>
            </div>
            <div className="flex gap-2 items-end ">
              <p className=" font-pt-serif text-4xl">Vrsta: </p>
              <p className=" font-pt-sans-narrow text-3xl ">
                {zivotinja.vrsta}
              </p>
            </div>
            <div className="flex gap-2 items-end">
              <p className="font-pt-serif text-4xl">Status: </p>
              <p className=" font-pt-sans-narrow text-3xl ">
                {zivotinja.status}
              </p>
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="self-start font-pt-serif text-4xl">Opis: </p>
              <p className=" text-start font-pt-sans-narrow ">
                {zivotinja.opis}
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={promijeniStatus}
            className="w-[150px] h-[50px] border border-red-51 bg-red-51 text-gray-61 font-pt-sans-narrow text-xl "
          >
            UDOMI
          </button>
          <button
            onClick={urediPodatke}
            className="w-[150px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-xl "
          >
            {uredi === true ? "SPREMI" : "UREDI"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default KarticaZivotinje;
