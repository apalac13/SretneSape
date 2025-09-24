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
      .get(`https://sretnesape.onrender.com/zivotinje/${zivotinjaId}`)
      .then((rez) => postaviZivotinju(rez.data))
      .catch((error) => console.log(error.message));
  }, [zivotinjaId]);

  const promijeniStatus = async () => {
    try {
      await axios.patch(
        `https://sretnesape.onrender.com/zivotinje/${zivotinjaId}`,
        {
          status: "udomljen",
        }
      );
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
      axios.put(
        `https://sretnesape.onrender.com/zivotinje/${zivotinja.id}`,
        zivotinja
      );
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
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-20 px-10 my-10">
      <img
        src={`../../../zivotinje/${zivotinja.slika}`}
        alt=""
        className="w-[400px] h-[500px]"
      />
      <div className=" flex flex-col h-[500px] justify-between">
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
