import { useEffect, useState } from "react";

import axios from "axios";

function Trazim({ user, osvjezi, postaviOsvjezi }) {
  const items = ["Tip", "Vrijednost", "Opis"];
  const [trazi, postaviTrazi] = useState([]);

  useEffect(() => {
    axios
      .get("https://sretnesape.onrender.com/trazi")
      .then((rez) => postaviTrazi(rez.data))
      .catch((err) => console.log(err.message));

    postaviOsvjezi(false);
  }, [osvjezi]);

  const obrisiPodatak = async (id) => {
    try {
      await axios.delete(`https://sretnesape.onrender.com/trazi/${id}`);
      postaviOsvjezi(true);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  const premjestiUDonirano = async (id) => {
    try {
      const itemToDonate = trazi.find((item) => item.id === id);
      await axios.post(
        `https://sretnesape.onrender.com/donirano`,
        itemToDonate
      );
      postaviOsvjezi(true);
      obrisiPodatak(id);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <table className="flex flex-col ">
      <thead className=" font-normal p-1 border-b border-black-45 ">
        <tr className="max-w-[800px] flex justify-between text-2xl ">
          {items.map((item, index) => (
            <th key={index} className=" font-normal">
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="flex flex-col gap-2 py-4 text-xl">
        {trazi.map((t) => (
          <tr
            key={t.id}
            className="flex flex-col md:flex-row items-start pb-2 border-b border-red-51 justify-between"
          >
            <td className="text-start">{t.tip}</td>
            <td className="text-center">{t.vrijednost}</td>
            <td className="text-start">{t.opis}</td>
            <td>
              {user === true ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => premjestiUDonirano(t.id)}
                    className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg "
                  >
                    DONIRANO
                  </button>
                  <button
                    onClick={() => obrisiPodatak(t.id)}
                    className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg "
                  >
                    IZBRIŠI
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => premjestiUDonirano(t.id)}
                  className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg "
                >
                  DONIRAJ
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Trazim;
