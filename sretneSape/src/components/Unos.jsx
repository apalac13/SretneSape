import { useState, useEffect } from "react";
import kalendar from "../assets/calendar.svg";
import axios from "axios";

export default function Unos() {
  const [novaZivotinja, postaviNovuZivotinju] = useState({
    ime: "",
    vrsta: "",
    status: "nije udomljen",
    godina: "",
    slika: "",
    opis: "",
    chipiran: false,
  });

  const vrste = [
    { label: "Pas", value: "pas" },
    { label: "Mačka", value: "macka" },
    { label: "Ostalo", value: "ostalo" },
  ];

  let [trenutniDatum, postaviTrenutniDatum] = useState("");

  useEffect(() => {
    const datum = new Date();
    const dan = datum.getDate();
    const mjesec = datum.getMonth() + 1;
    const godina = datum.getFullYear();
    postaviTrenutniDatum(`${dan}-${mjesec}-${godina}`);
  }, []);

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviNovuZivotinju({ ...novaZivotinja, [name]: value });
  }

  function promjenaChecka(event) {
    const { checked } = event.target;
    postaviNovuZivotinju({ ...novaZivotinja, chipiran: checked });
  }

  const saljiPodatke = (event) => {
    event.preventDefault();
    console.log(novaZivotinja);
    axios
      .post("https://sretnesape.onrender.com/zivotinje", novaZivotinja)
      .then((rez) => console.log(rez))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="mt-36 mb-56 ">
        <h1 className="text-black-46 text-5xl max-[800px]:text-4xl font-pt-sans-narrow mb-20">
          Unos nove životinje
        </h1>
        <div className="flex justify-center items-center">
          <form
            onSubmit={saljiPodatke}
            className="flex flex-col items-center max-[400px]:w-full"
          >
            <div className="flex flex-col max-[800px]:px-4 lg:w-[800px] w-full lg:flex-row lg:items-start items-center justify-between font-pt-sans-narrow mb-10">
              <div className="flex flex-col w-full gap-8">
                {/* Ime */}
                <div className="flex flex-col gap-1 items-start w-full">
                  <label htmlFor="ime" className="text-3xl">
                    Ime:
                  </label>
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    value={novaZivotinja.ime}
                    onChange={promjenaUlaza}
                    cols="3"
                    className="lg:w-[400px] w-full  text-xl p-1 bg-gray-50 border border-black-45 rounded"
                    required
                  />
                </div>

                {/* Vrsta */}
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-3xl">Vrsta:</p>
                  <div className="flex gap-8 text-2xl">
                    {vrste.map((vrsta, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="radio"
                          name="vrsta"
                          value={vrsta.value}
                          onChange={promjenaUlaza}
                          checked={novaZivotinja.vrsta === vrsta.value}
                          className="w-6 h-6 border border-solid border-black-45 rounded-full mr-2 cursor-pointer"
                        />
                        <label>{vrsta.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Godine */}
                <div className="flex flex-col items-start">
                  <label htmlFor="godine" className="text-3xl">
                    Godine:
                  </label>
                  <input
                    type="text"
                    id="godine"
                    name="godina"
                    value={novaZivotinja.godina}
                    onChange={promjenaUlaza}
                    className="lg:w-[400px] w-full h-[40px] text-xl p-1 bg-gray-50 border border-black-45 rounded"
                    required
                  />
                </div>

                {/* Opis */}
                <div className="flex flex-col items-start">
                  <label htmlFor="opis" className="text-3xl">
                    Opis:
                  </label>
                  <textarea
                    name="opis"
                    id="opis"
                    value={novaZivotinja.opis}
                    onChange={promjenaUlaza}
                    className="text-xl w-full h-10 p-1 bg-gray-50 border border-black-45 rounded"
                  ></textarea>
                </div>
              </div>

              {/* Desna strana */}
              <div className="self-start flex flex-col gap-14 text-3xl">
                {/* Slika */}
                <div className="flex flex-col items-start gap-1">
                  <label htmlFor="slika">Slika:</label>
                  <input
                    type="text"
                    id="slika"
                    name="slika"
                    value={novaZivotinja.slika}
                    onChange={promjenaUlaza}
                    className="w-[200px] h-[40px] text-xl p-1 bg-gray-50 border border-black-45 rounded"
                  />
                </div>

                {/* Čipiran */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={novaZivotinja.chipiran}
                    onChange={promjenaChecka}
                    className="w-8 h-8 border border-solid border-black-45 mr-2 cursor-pointer checked:bg-black-45"
                  />
                  <label htmlFor="chipiran">Čipiran</label>
                </div>

                {/* Pregled */}
                <div className="flex flex-col items-start gap-1">
                  <div className="flex gap-2">
                    <img src={kalendar} alt="kalendar" width={30} height={30} />
                    <p>Pregled:</p>
                  </div>
                  <input
                    type="text"
                    value={trenutniDatum}
                    readOnly
                    className="w-[200px] h-[40px] text-base bg-gray-50 border border-black-45 rounded"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[50px] border border-red-51 bg-red-51 text-gray-61 font-pt-sans-narrow text-xl"
            >
              SPREMI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

