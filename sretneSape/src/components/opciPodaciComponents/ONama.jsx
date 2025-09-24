import Map from "./Map";
import paws2 from "../../assets/slike/paws2.png";
import destination from "../../assets/slike/destination.png";
import contactUs from "../../assets/slike/contact-us.png";
import conversation from "../../assets/slike/conversation.png";
import { useState, useEffect } from "react";
import axios from "axios";

function ONama() {
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
      .get("https://sretnesape.onrender.com/mail")
      .then((rez) => postaviMail(rez.data))
      .catch((error) => console.log(error.message));
  }, []);

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatke({ ...formaPodaci, [name]: value });
  }

  function saljiPodatke() {
    axios
      .post("https://sretnesape.onrender.com/mail", formaPodaci)
      .then((rez) => postaviMail((stanje) => [...stanje, rez.data]));
  }

  return (
    <div className=" pt-[70px] pb-56 px-24 font-pt-sans-narrow">
      <h1 className="text-black-46  text-6xl max-[1022px]:text-4xl ">O NAMA</h1>
      {/* sape */}
      <div className="flex lg:flex-row  max-[768px]:flex-col  items-center gap-14  mt-20  ">
        <img
          src={paws2}
          alt="sape"
          className="w-80 h-80 max-[1022px]:w-40  max-[1022px]:h-40  "
        />
        <p className="  text-xl max-[1022px]:text-base  leading-[46px]  max-[1022px]:leading-8 text-center">
          Dobrodošli u &quot;Sretne Šape&quot; - oaza nade za četveronožne
          prijatelje u potrazi za vječnim domom. Naša strast i svakodnevni
          napori usmjereni su prema stvaranju boljeg sutra za napuštene
          životinje. Naša jednostavna, ali duboka misija: pružiti svakoj šapici
          ne samo krov nad glavom, već i vječnu ljubav. Kroz našu stranicu,
          želimo vam približiti priče ovih nevjerojatnih bića i pozvati vas da
          postanete dio njihovih života. &quot;Sretne Šape &quot; nisu samo
          azil; mi smo zajednica ljubitelja životinja uvjerenih da svaka šapica
          zaslužuje šansu za sreću. Uz vašu podršku, zajedno možemo stvoriti
          svijet gdje svaka šapica ima priliku znati što znači biti voljen.
          Hvala vam što ste s nama na ovom putovanju ispunjenom ljubavlju i
          nadom!
        </p>
      </div>
      {/* lokacija */}
      <div className="flex  lg:flex-row max-[768px]:flex-col max-[1022px]:items-center gap-14 items-end justify-between  mt-32 ">
        <div className="flex grow flex-col gap-20 w-full">
          <p className=" text-black-46 text-6xl max-[1022px]:text-4xl ">
            lokacija
          </p>
          <Map location={location} zoomLevel={17} />
        </div>
        <img
          className="w-80 h-80 max-[1022px]:w-40 max-[1022px]:h-40  "
          src={destination}
          alt="contact us icon"
        />
      </div>
      {/* kontakt */}
      <div className="flex lg:flex-row max-[768px]:flex-col items-center gap-14  justify-between  mt-32">
        <img
          className="w-80 h-80 max-[1022px]:w-40 max-[1022px]:h-40 "
          src={contactUs}
          alt="contact us icon"
        />
        <div className="flex grow flex-col gap-11 font-pt-sans-narrow text-2xl max-[1022px]:text-xl  leading-normal ">
          <p className="max-[1022px]:self-center text-black-46 text-6xl max-[1022px]:text-4xl   ">
            kontakt
          </p>
          <p className=" text-black-46 ">
            tel: +387 39 661 000 <br />
            mob. tel: +387 63 111 111 <br />
            email: sretne.sape@gmail.com
          </p>
          <p className=" text-black-46">
            Radno vrijeme <br />
            pon-pet: 08:00h - 16:00h <br />
            sub: 09:00h - 14:00h
          </p>
        </div>
      </div>
      {/* pitanje */}
      <div className="flex lg:flex-row max-[768px]:flex-col justify-between items-center max-[1022px]:items-center  gap-[104px] mt-32 ">
        <div className="flex flex-col  gap-[104px]">
          <p className="text-black-46 text-6xl max-[1022px]:text-4xl">
            imaš pitanje?
          </p>
          <form
            className="flex flex-col items-start justify-center max-w-[600px]  gap-7"
            onSubmit={saljiPodatke}
          >
            <label
              htmlFor=""
              className="flex max-[1022px]:flex-col max-[1022px]:items-start  items-end justify-between w-full   text-4xl "
            >
              <p className=" max-[1022px]:text-3xl ">Ime:</p>
              <input
                type="text"
                name="ime"
                value={formaPodaci.ime}
                onChange={promjenaUlaza}
                className=" max-w-[500px] h-12  bg-gray-50 border border-black-45"
                required
              />
            </label>
            <label
              htmlFor=""
              className="flex max-[1022px]:flex-col max-[1022px]:items-start items-end justify-between w-full   text-4xl"
            >
              <p className=" max-[1022px]:text-3xl ">Prezime:</p>
              <input
                type="text"
                name="prezime"
                value={formaPodaci.prezime}
                onChange={promjenaUlaza}
                className="max-w-[500px] h-12  bg-gray-50 border border-black-45"
                required
              />
            </label>
            <label
              htmlFor=""
              className="flex max-[1022px]:flex-col max-[1022px]:items-start items-end justify-between w-full  text-4xl"
            >
              <p className=" max-[1022px]:text-3xl ">Email:</p>
              <input
                type="email"
                name="email"
                value={formaPodaci.email}
                onChange={promjenaUlaza}
                className="max-w-[500px] h-12  bg-gray-50 border border-black-45"
                required
              />
            </label>
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
        </div>
        <img
          src={conversation}
          alt="conversation-icon"
          className="w-80 h-80 max-[1022px]:w-40 max-[1022px]:h-40"
        />
      </div>
    </div>
  );
}

export default ONama;
