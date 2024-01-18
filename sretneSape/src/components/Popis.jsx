import Navigacija from "./Navigacija";
import Filter from "./popisComponents/Filter";
import Zivotinja from "./popisComponents/Zivotinja";
import Footer from "./Footer";
function Popis(props) {
  return (
    <div>
      <Navigacija item={"popis"} />
      <div
        className="flex
      justify-between  gap-8 px-8"
      >
        <Filter />
        <Zivotinja />
      </div>
    </div>
  );
}

export default Popis;
