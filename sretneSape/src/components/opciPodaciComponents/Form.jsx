import { useState, useEffect } from "react";
import axios from "axios";
import InputField from "./InputField";

export default function Form() {
  const [mail, postaviMail] = useState([]);
  const [formaPodaci, postaviPodatke] = useState({
    ime: "",
    prezime: "",
    email: "",
    poruka: "",
  });

  useEffect(() => {
    axios
      .get("https://sretnesape.onrender.com/mail")
      .then((rez) => postaviMail(rez.data))
      .catch((error) => console.log(error.message));
  }, []);

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatke({ ...formaPodaci, [name]: value });
  }
  function saljiPodatke(event) {
    event.preventDefault();
    axios
      .post("https://sretnesape.onrender.com/mail", formaPodaci)
      .then((rez) => {
        postaviMail((stanje) => [...stanje, rez.data]);
        postaviPodatke({ ime: "", prezime: "", email: "", poruka: "" });
      })
      .catch((err) => console.log("Greška kod slanja:", err.message));
  }

  return (
    <form
      className="flex flex-col items-start justify-center max-w-[600px] gap-7"
      onSubmit={saljiPodatke}
    >
      <InputField
        type={"text"}
        name={"ime"}
        value={formaPodaci.ime}
        onChange={promjenaUlaza}
      />
      <InputField
        type={"text"}
        name={"prezime"}
        value={formaPodaci.prezime}
        onChange={promjenaUlaza}
      />
      <InputField
        type={"email"}
        name={"email"}
        value={formaPodaci.email}
        onChange={promjenaUlaza}
      />
      <label
        htmlFor=""
        className="flex max-[1022px]:flex-col max-[1022px]:items-start items-start justify-between w-full  text-4xl"
      >
        <p className=" max-[1022px]:text-3xl ">Poruka:</p>
        <textarea
          name="poruka"
          value={formaPodaci.poruka}
          onChange={promjenaUlaza}
          rows={4}
          className="w-full bg-gray-50 border border-black-45"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full h-[60px] text-2xl text-gray-61 bg-red-51 border border-red-51 self-end hover:bg-black-45"
      >
        POŠALJI
      </button>
    </form>
  );
}
