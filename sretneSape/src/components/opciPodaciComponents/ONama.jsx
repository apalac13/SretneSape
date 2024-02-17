import Map from "./Map";
import paws2 from "../../assets/slike/paws2.png";
import destination from "../../assets/slike/destination.png";
import contactUs from "../../assets/slike/contact-us.png";
import conversation from "../../assets/slike/conversation.png";
import { useState, useEffect } from "react";
import axios from "axios";

function ONama(props) {
  const location = {
    address: "Hrvatskih branitelja 2, Grude 88340, Bosna i Hercegovina",
    lat: 43.3615127,
    lng: 17.4186861,
  };

  const [mail, postaviMail] = useState([]);
  const [formaPodaci, postaviPodatke] = useState({
    ime: "",
    prezime: "",
    email: "",
    poruka: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/mail")
      .then((rez) => postaviMail(rez.data))
      .catch((error) => console.log(error.message));
  }, []);

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatke({ ...formaPodaci, [name]: value });
  }

  function saljiPodatke() {
    axios
      .post("http://localhost:3001/mail", formaPodaci)
      .then((rez) => postaviMail((stanje) => [...stanje, rez.data]));
  }

  return (
    <div className=" pt-[70px] pb-56 font-pt-sans-narrow">
      <h1 className="text-black-46  text-[80px] ">O NAMA</h1>
      {/* sape */}
      <div className="flex items-center gap-14  mt-20 mx-[55px]">
        <img src={paws2} alt="sape" className="w-[400px] h-[400px]" />
        <p className="  text-2xl  leading-[46px] text-center">
          Dobrodošli u "Sretne Šape" - oaza nade za četveronožne prijatelje u
          potrazi za vječnim domom. Naša strast i svakodnevni napori usmjereni
          su prema stvaranju boljeg sutra za napuštene životinje. Naša
          jednostavna, ali duboka misija: pružiti svakoj šapici ne samo krov nad
          glavom, već i vječnu ljubav. Kroz našu stranicu, želimo vam približiti
          priče ovih nevjerojatnih bića i pozvati vas da postanete dio njihovih
          života. "Sretne Šape" nisu samo azil; mi smo zajednica ljubitelja
          životinja uvjerenih da svaka šapica zaslužuje šansu za sreću. Uz vašu
          podršku, zajedno možemo stvoriti svijet gdje svaka šapica ima priliku
          znati što znači biti voljen. Hvala vam što ste s nama na ovom
          putovanju ispunjenom ljubavlju i nadom!
        </p>
      </div>
      {/* lokacija */}
      <div className="flex items-end justify-between  mt-32 mx-[55px]  ">
        <div className="flex flex-col gap-[104px]">
          <p className=" text-black-46 text-[80px] ">lokacija</p>
          <Map location={location} zoomLevel={17} />
        </div>
        <img
          className="w-[400px] h-[400px]"
          src={destination}
          alt="contact us icon"
        />
      </div>
      {/* kontakt */}
      <div className="flex flex-col  gap-[104px] mt-32 mx-[55px]">
        <p className="self-end text-black-46 text-[80px] mr-[215px] ">
          kontakt
        </p>
        <div className="flex justify-between">
          <img
            className="w-[400px] h-[400px]"
            src={contactUs}
            alt="contact us icon"
          />
          <div className="flex flex-col gap-11 font-pt-sans-narrow text-3xl  leading-normal w-[637px] ">
            <p className=" text-black-46 ">
              tel: +387 39 661 000 <br />
              mob. tel: +387 63 111 111 <br />
              email: sretne.sape@gmail.com
            </p>
            <p>
              Radno vrijeme <br />
              pon-pet: 08:00h - 16:00h <br />
              sub: 09:00h - 14:00h
            </p>
          </div>
        </div>
      </div>
      {/* pitanje */}
      <div className="flex justify-between items-end gap-[104px] mt-32 mx-[55px]">
        <div className="flex flex-col  gap-[104px]">
          <p className="text-black-46 text-[80px]">imaš pitanje?</p>
          <form
            className="flex flex-col items-start gap-7"
            onSubmit={saljiPodatke}
          >
            <label
              htmlFor=""
              className="flex items-end justify-between w-[700px]  text-4xl"
            >
              <p>Ime:</p>
              <input
                type="text"
                name="ime"
                value={formaPodaci.ime}
                onChange={promjenaUlaza}
                className="  w-[550px] h-12  bg-gray-50 border border-black-45"
                required
              />
            </label>
            <label
              htmlFor=""
              className="flex items-end justify-between w-[700px] text-4xl"
            >
              <p>Prezime:</p>
              <input
                type="text"
                name="prezime"
                value={formaPodaci.prezime}
                onChange={promjenaUlaza}
                className="w-[550px] h-12  bg-gray-50 border border-black-45"
                required
              />
            </label>
            <label
              htmlFor=""
              className="flex items-end justify-between w-[700px] text-4xl"
            >
              <p>Email:</p>
              <input
                type="email"
                name="email"
                value={formaPodaci.email}
                onChange={promjenaUlaza}
                className="w-[550px] h-12  bg-gray-50 border border-black-45"
                required
              />
            </label>
            <label
              htmlFor=""
              className="flex items-start justify-between w-[700px] text-4xl"
            >
              <p>Poruka:</p>
              <textarea
                name="poruka"
                value={formaPodaci.poruka}
                onChange={promjenaUlaza}
                rows={4}
                cols={35}
                className=" bg-gray-50 border border-black-45"
                required
              />
            </label>
            <button
              type="submit"
              className="w-[550px] h-[70px] text-3xl text-gray-61 bg-red-51 border border-black-45 self-end"
            >
              POŠALJI
            </button>
          </form>
        </div>
        <img
          src={conversation}
          alt="conversation-icon"
          className="w-[400px] h-[400px]"
        />
      </div>
    </div>
  );
}

export default ONama;
