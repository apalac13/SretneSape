import Navigacija from "./Navigacija";
import Filter from "./popisComponents/Filter";
import Zivotinja from "./popisComponents/Zivotinja";
import Footer from "./Footer";
import { useState } from "react";

function Popis(props) {
  const [filterStatus, postaviFilterStatus] = useState("");
  const [filterVrsta, postaviFilterVrsta] = useState("");

  return (
    <div>
      <Navigacija item={"popis"} />
      <div
        className="flex
      justify-between  gap-8 mx-8"
      >
        <Filter
          filterStatus={filterStatus}
          postaviStatus={postaviFilterStatus}
          filterVrsta={filterVrsta}
          postaviVrstu={postaviFilterVrsta}
        />
        <Zivotinja filterStatus={filterStatus} filterVrsta={filterVrsta} />
      </div>
      <Footer />
    </div>
  );
}

export default Popis;
