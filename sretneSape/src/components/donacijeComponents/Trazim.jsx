import { useEffect, useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";
import axios from "axios";

function Trazim() {
  const items = ["Tip", "Vrijednost", "Opis"];
  const [trazi, postaviTrazi] = useState([]);
  const [izbrisi, postaviIzbrisi] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/trazi")
      .then((rez) => postaviTrazi(rez.data))
      .catch((err) => console.log(err.message));
  }, [izbrisi]);

  const user = useContext(userContext);

  const obrisiPodatak = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/trazi/${id}`);
      postaviIzbrisi(true);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  console.log(trazi);

  return (
    <table className="flex flex-col ">
      <thead className=" font-normal p-1 border-b border-black-45 ">
        <tr className="w-[800px] flex justify-between text-2xl ">
          {items.map((item, index) => (
            <th key={index} className=" font-normal">
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="flex flex-col gap-1 py-4 text-xl">
        {trazi.map((t) => (
          <tr key={t.id} className="flex justify-between">
            <td>{t.tip}</td>
            <td>{t.vrijednost}</td>
            <td className="border border-red-51 p-2 bg-gray-61">{t.opis}</td>
            <td>
              {user === true ? (
                <div className="flex gap-2">
                  <button className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg ">
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
                <button className="w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-61 font-pt-sans-narrow text-lg ">
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
