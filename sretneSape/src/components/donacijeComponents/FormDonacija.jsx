import { useState } from "react";
import axios from "axios";

function FormDonacija({
  user,
  osvjezi,
  postaviOsvjezi,
  novaDonacija,
  postaviNovuDonaciju,
}) {
  const tip = ["Hrana", "Igracke", "Lijekovi"];

  const promjenaUlaza = (event) => {
    const { name, value } = event.target;
    postaviNovuDonaciju({ ...novaDonacija, [name]: value });
  };

  const posaljiDonaciju = async () => {
    try {
      if (user) {
        await axios
          .post(`http://localhost:3001/trazi`, novaDonacija)
          .then((rez) => {
            postaviTrazi(...rez, rez.data);
            postaviOsvjezi(true);
          });
      } else {
        await axios
          .post(`http://localhost:3001/nudi`, novaDonacija)
          .then((rez) => {
            postaviTrazi(...rez, rez.data);
            postaviOsvjezi(true);
          });
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <form className="flex flex-col lg:flex-row gap-4 items-start justify-center text-lg">
      <label className="flex flex-col items-start">
        <div className="h-7"></div>
        <select
          name="tip"
          value={novaDonacija.tip}
          onChange={promjenaUlaza}
          className="border border-red-51 rounded w-[200px] h-[30px] hover:border-red-51/90"
        >
          <option value="">Tip</option>
          {tip.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col items-start">
        <p>Vrijednost:</p>
        <input
          type="text"
          name="vrijednost"
          value={novaDonacija.vrijednost}
          onChange={promjenaUlaza}
          className="border border-red-51 rounded w-[200px] h-[30px] hover:border-red-51/90"
        />
      </label>
      <label className="flex flex-col items-start">
        <p>Opis:</p>
        <textarea
          name="opis"
          cols="30"
          rows="5"
          value={novaDonacija.opis}
          onChange={promjenaUlaza}
          className="border border-red-51 rounded hover:border-red-51/90"
        ></textarea>
      </label>

      <button
        onClick={posaljiDonaciju}
        className="flex items-center justify-center lg:mt-7  w-[130px] h-[50px] border border-red-51 bg-gray-61 text-red-51 font-pt-sans-narrow text-xl mb-16"
      >
        POŠALJI
      </button>
    </form>
  );
}

export default FormDonacija;
