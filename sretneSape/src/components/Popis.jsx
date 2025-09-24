import Filter from "./popisComponents/Filter";
import Zivotinja from "./popisComponents/Zivotinja";

import { useState } from "react";

function Popis() {
  const [filterStatus, postaviFilterStatus] = useState("");
  const [filterVrsta, postaviFilterVrsta] = useState("");

  return (
    <div>
      <div
        className="flex lg:flex-row flex-col
      justify-between   gap-8 mx-8"
      >
        <Filter
          filterStatus={filterStatus}
          postaviStatus={postaviFilterStatus}
          filterVrsta={filterVrsta}
          postaviVrstu={postaviFilterVrsta}
        />
        <Zivotinja filterStatus={filterStatus} filterVrsta={filterVrsta} />
      </div>
    </div>
  );
}

export default Popis;
