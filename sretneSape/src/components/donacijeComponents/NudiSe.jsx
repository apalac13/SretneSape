import { useState, useEffect } from "react";
import axios from "axios";

export default function NudiSe({ user, osvjezi, postaviOsvjezi }) {
  const items = ["Tip", "Vrijednost", "Opis"];
  const [nudi, postaviPonudu] = useState([]);

  useEffect(() => {
    axios
      .get("https://sretnesape.onrender.com/nudi")
      .then((rez) => postaviPonudu(rez.data))
      .catch((err) => console.log(err.message));
    postaviOsvjezi(false);
  }, [osvjezi]);

  const obrisiPodatak = async (id) => {
    try {
      await axios.delete(`https://sretnesape.onrender.com/nudi/${id}`);
      postaviOsvjezi(true);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  const premjestiUDonirano = async (id) => {
    try {
      const itemToDonate = nudi.find((item) => item.id === id);
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
        {nudi.map((n) => (
          <tr
            key={n.id}
            className="flex flex-col md:flex-row items-start pb-2 border-b border-red-51 justify-between"
          >
            <td className="text-start">{n.tip}</td>
            <td className="text-center">{n.vrijednost}</td>
            <td className="text-start">{n.opis}</td>
            <td>
              {user === true && (
                <button
                  onClick={() => premjestiUDonirano(n.id)}
                  className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg "
                >
                  PRIHVATI
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
