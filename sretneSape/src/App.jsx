import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigacija from "./components/Navigacija";
import OpciPodaci from "./components/OpciPodaci";
import Popis from "./components/Popis";
import Donacije from "./components/Donacije";
import Obavijesti from "./components/Obavijesti";
import Unos from "./components/Unos";
import ErrorStranica from "./components/ErrorStranica";
import KarticaZivotinje from "./components/popisComponents/KarticaZivotinje";
import "./App.css";
import userContext from "./components/userContext";

function App() {
  const [korisnik, postaviKorisnika] = useState(false);
  const handleUserChange = (e) => {
    postaviKorisnika(e.target.checked);
  };

  return (
    <div>
      <userContext.Provider value={korisnik}>
        <Navigacija action={handleUserChange} />
        <Routes>
          <Route path="/" element={<OpciPodaci />} />
          <Route path="/popis" element={<Popis />} />
          <Route path="/popis/:zivotinjaId" element={<KarticaZivotinje />} />
          <Route path="/donacije" element={<Donacije />} />
          <Route path="/obavijesti" element={<Obavijesti />} />
          <Route path="/unos" element={<Unos />} />
          <Route path="*" element={<ErrorStranica />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
