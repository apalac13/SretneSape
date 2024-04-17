import { useState } from "react";
import axios from "axios";

function FormDonacija({
  user,
  osvjezi,
  postaviOsvjezi,
  novaDonacija,
  postaviNovuDonaciju,
}) {
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
    <form className="flex gap-4">
      <label>
        <select
          name="tip"
          value={novaDonacija.tip}
          onChange={promjenaUlaza}
          className="border border-red-200 rounded w-[200px] h-[30px] hover:border-red-950"
        >
          <option value="">Tip</option>
          <option value="Hrana">Hrana</option>
          <option value="Igracke">Igracke</option>
          <option value="Lijekovi">Lijekovi</option>
        </select>
      </label>
      <label>
        <input
          type="text"
          name="vrijednost"
          value={novaDonacija.vrijednost}
          onChange={promjenaUlaza}
        />
      </label>
      <label>
        <textarea
          name="opis"
          cols="30"
          rows="5"
          value={novaDonacija.opis}
          onChange={promjenaUlaza}
        ></textarea>
      </label>

      <button onClick={posaljiDonaciju}>POŠALJI</button>
    </form>
  );
}

export default FormDonacija;
