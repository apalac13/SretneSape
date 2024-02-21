import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PrikazPodataka from "./karticaZivotinjeComponents/PrikazPodataka";
import UrediPodatke from "./karticaZivotinjeComponents/UrediPodatke";

function KarticaZivotinje() {
  const [zivotinja, postaviZivotinju] = useState([]);
  const { zivotinjaId } = useParams();
  const [uredi, postaviUredi] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/zivotinje/${zivotinjaId}`)
      .then((rez) => postaviZivotinju(rez.data))
      .catch((error) => console.log(error.message));
  }, [zivotinjaId]);

  const promijeniStatus = async () => {
    try {
      await axios.patch(`http://localhost:3001/zivotinje/${zivotinjaId}`, {
        status: "udomljen",
      });
      postaviZivotinju((prevZivotinja) => ({
        ...prevZivotinja,
        status: "udomljen",
      }));
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
          <UrediPodatke
            zivotinja={zivotinja}
            promjenaPodatka={promjenaPodatka}
          />
        ) : (
          <PrikazPodataka zivotinja={zivotinja} />
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
