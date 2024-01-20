import axios from "axios";
import { useState, useEffect } from "react";

function Zivotinja(props) {
  const [zivotinje, postaviZivotinje] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/zivotinje")
      .then((rez) => postaviZivotinje(rez.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-20  mt-36 mb-56">
      {zivotinje.map((zivotinja) => (
        <div key={zivotinja.id} className="">
          <img
            src={`../../../zivotinje/${zivotinja.slika}`}
            alt={zivotinja.slika}
            className="w-[350px] h-[440px]"
          />
          <p className=" font-open-sans italic text-3xl">{zivotinja.ime}</p>
          <p className="font-open-sans ">{zivotinja.godina}</p>
        </div>
      ))}
    </div>
  );
}

export default Zivotinja;
