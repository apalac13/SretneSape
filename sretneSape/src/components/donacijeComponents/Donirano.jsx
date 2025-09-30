import { useState, useEffect } from "react";
import axios from "axios";

export default function Donirano({ user, osvjezi, postaviOsvjezi }) {
  const items = ["Tip", "Vrijednost", "Opis"];
  const [donirano, postaviDonirano] = useState([]);

  useEffect(() => {
    if (osvjezi) {
      axios
        .get("https://sretnesape.onrender.com/donirano")
        .then((rez) => postaviDonirano(rez.data))
        .catch((err) => console.log(err.message));

      postaviOsvjezi(false);
    }
  }, [osvjezi]);

  const obrisiPodatak = async (id) => {
    try {
      await axios.delete(`https://sretnesape.onrender.com/donirano/${id}`);
      postaviOsvjezi(true);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  const premjestiUTrazi = async (id) => {
    try {
      const itemToDonate = donirano.find((item) => item.id === id);
      await axios.post(`https://sretnesape.onrender.com/trazi`, itemToDonate);
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
        {donirano.map((d) => (
          <tr
            key={d.id}
            className="flex flex-col md:flex-row items-start pb-2 border-b border-red-51 justify-between"
          >
            <td className="text-start">{d.tip}</td>
            <td className="text-center">{d.vrijednost}</td>
            <td className="text-start">{d.opis}</td>
            <td>
              {user === true && (
                <div className="flex gap-2">
                  <button
                    onClick={() => premjestiUTrazi(d.id)}
                    className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg "
                  >
                    PONOVI
                  </button>
                  <button
                    onClick={() => obrisiPodatak(d.id)}
                    className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg "
                  >
                    IZBRIŠI
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
