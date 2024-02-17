import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import OpciPodaci from "./components/OpciPodaci";
import Popis from "./components/Popis";
import Donacije from "./components/Donacije";
import Obavijesti from "./components/Obavijesti";
import Unos from "./components/Unos";
import ErrorStranica from "./components/ErrorStranica";
import KarticaZivotinje from "./components/popisComponents/KarticaZivotinje";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OpciPodaci />} />
        <Route path="/popis" element={<Popis />} />
        <Route path="/popis/:zivotinjaId" element={<KarticaZivotinje />} />
        <Route path="/donacije" element={<Donacije />} />
        <Route path="/obavijesti" element={<Obavijesti />} />
        <Route path="/unos" element={<Unos />} />
        <Route path="*" element={<ErrorStranica />} />
      </Routes>
    </>
  );
}

export default App;
