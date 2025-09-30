import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Zivotinja({ filterStatus, filterVrsta }) {
  const [zivotinje, postaviZivotinje] = useState([]);

  useEffect(() => {
    axios
      .get("https://sretnesape.onrender.com/zivotinje")
      .then((rez) => postaviZivotinje(rez.data))
      .catch((error) => console.log(error.message));
  }, []);

  const filteredZivotinje = zivotinje.filter((zivotinja) => {
    if (
      (filterStatus === "" || zivotinja.status === filterStatus) &&
      (filterVrsta === "" || zivotinja.vrsta === filterVrsta)
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-x-6 gap-y-20 mt-36 mb-56">
      {filteredZivotinje.map((zivotinja) => (
        <div key={zivotinja.id} className=" justify-self-center">
          <Link
            to={{
              pathname: `/popis/${zivotinja.id}`,
            }}
          >
            <img
              src={`../../../zivotinje/${zivotinja.slika}`}
              alt={zivotinja.slika}
              className="w-[350px] h-[440px] cursor-pointer"
            />
            <p className="font-open-sans italic text-3xl">{zivotinja.ime}</p>
            <p className="font-open-sans ">{zivotinja.godina}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
