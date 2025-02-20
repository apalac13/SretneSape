import { useState, useEffect, useContext } from "react";
import axios from "axios";
import userContext from "./userContext";
import bin from "../assets/bin.png";

function Obavijesti() {
  const user = useContext(userContext);
  const [prikazi, poszaviPrikazi] = useState(false);
  const [obavijest, postaviObavijest] = useState([]);
  const [novaObavijest, postaviNovuObavijest] = useState({
    naslov: "",
    text: "",
    vazno: false,
    datum: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/obavijesti")
      .then((rez) => postaviObavijest(rez.data))
      .catch((error) => console.log("Error:", error.message));
  }, []);

  const promjenaUlaza = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    postaviNovuObavijest({ ...novaObavijest, [name]: newValue });
  };

  async function posaljiObavijest() {
    const { naslov, text } = novaObavijest;

    // Get the current date
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    // Add the current date to novaObavijest
    const novaObavijestWithDate = {
      ...novaObavijest,
      datum: formattedDate,
    };

    // Validation functions
    const isValidNaslov = naslov.length <= 20;
    const isValidTextLength = text.length >= 10 && text.length <= 200;

    // Check for validation errors
    if (!isValidNaslov || !isValidTextLength) {
      let errorMessage = "";
      if (!isValidNaslov)
        errorMessage += "Naslov može imati maksimalno 20 znakova.\n";
      if (!isValidTextLength)
        errorMessage += "Tekst mora sadržavati između 10 i 200 znakova.\n";

      alert(errorMessage.trim());
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/obavijesti",
        novaObavijestWithDate // Send novaObavijest with current date
      );
      postaviObavijest(response.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  const izbrisiObavijest = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/obavijesti/${id}`);
      const rez = await axios.get("http://localhost:3001/obavijesti");
      postaviObavijest(rez.data);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <div className="flex flex-col mt-36 mb-56 mx-16 font-pt-sans-narrow ">
      <div className="flex flex-col lg:flex-row justify-between mb-16">
        <button
          onClick={() => poszaviPrikazi(!prikazi)}
          className="flex items-center justify-center  w-[200px] h-[55px] border border-red-52 bg-red-52 text-gray-61 font-pt-sans-narrow text-xl "
        >
          NOVA OBAVIJEST
        </button>
        <form
          onSubmit={posaljiObavijest}
          className={` ${
            prikazi ? `visible` : `hidden`
          }  flex flex-col  gap-2  max-w-[500px] border border-black-45 rounded-md p-3`}
        >
          <div className="flex gap-2">
            <label className="text-xl">Naslov:</label>
            <input
              className="w-full h-8  bg-white-70 border border-black-45 rounded-sm"
              type="text"
              name="naslov"
              value={novaObavijest.naslov}
              onChange={promjenaUlaza}
              required
            />
          </div>
          <div className="flex gap-2 ">
            <label className="text-xl">Text:</label>
            <textarea
              className="bg-white-70 border border-black-45 rounded-sm"
              name="text"
              value={novaObavijest.text}
              onChange={promjenaUlaza}
              cols="80"
              rows="8"
            ></textarea>
          </div>
          <div className="flex justify-between items-center ">
            {user ? (
              <div className="flex items-center justify-center">
                <input
                  className="w-8 h-8 border border-solid border-black-45  checked:bg-black-45 mr-2 cursor-pointer hover:black-45/60"
                  type="checkbox"
                  id="checkbox"
                  name="vazno"
                  value={novaObavijest.vazno}
                  checked={novaObavijest.vazno}
                  onChange={promjenaUlaza}
                />
                <label className="text-xl" htmlFor="checkbox">
                  Vazno
                </label>
              </div>
            ) : (
              <div></div>
            )}
            <input
              type="submit"
              value="SPREMI"
              className="flex items-center justify-center w-[100px] h-[50px] cursor-pointer  border border-red-52 bg-red-52 text-gray-61 font-pt-sans-narrow text-xl "
            />
          </div>
        </form>
      </div>
      <div className="flex  flex-col gap-6 ">
        <p className="self-start text-3xl text-red-51">OBAVIJESTI:</p>
        <div className=" flex flex-col gap-3 items-center justify-center">
          {obavijest.map((o, index) => (
            <div
              key={index}
              className={`max-w-[800px] h-[250px]   ${
                o.vazno
                  ? "bg-red-52 text-gray-61/[0.92] border border-red-52"
                  : "bg-gray-61 text-black-46 border border-black-45 "
              }  `}
            >
              <div
                className={`flex justify-between  ${
                  o.vazno
                    ? " border-b border-gray-61/[0.4] bg-red-52 "
                    : " border-b border-black-45 "
                }   text-2xl p-1`}
              >
                <p className={` ${o.vazno ? "   bg-red-52 " : " "}   `}>
                  Naslov: {o.naslov}
                </p>
                {o.vazno && (
                  <p className={` ${o.vazno ? "   bg-red-52 " : "  "}   `}>
                    Vazno!
                  </p>
                )}
                <p className={` ${o.vazno ? "   bg-red-52 " : " "}   `}>
                  {o.datum}
                </p>
              </div>
              <div
                className={`flex flex-col  p-3  ${
                  o.vazno ? "   bg-red-52 " : "  "
                } `}
              >
                <p
                  className={`h-[120px] text-left text-lg  ${
                    o.vazno ? "   bg-red-52 " : "  "
                  } `}
                >
                  {o.text}
                </p>
                {user && (
                  <div
                    className={`flex flex-col justify-center items-end ${
                      o.vazno ? "   bg-red-52 " : "  "
                    } `}
                  >
                    <p className={`${o.vazno ? "   bg-red-52/[0.8] " : "  "} `}>
                      IZBRISI
                    </p>
                    <img
                      src={bin}
                      alt="ikona smeca"
                      className={`w-8 h-8 cursor-pointer ${
                        o.vazno ? "   bg-red-52/[0.8] " : "  "
                      } `}
                      onClick={() => izbrisiObavijest(o.id)}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Obavijesti;
