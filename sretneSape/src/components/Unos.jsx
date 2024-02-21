import Navigacija from "./Navigacija";
import Footer from "./Footer";

function Unos(props) {
  return (
    <div>
      <Navigacija item={"unos"} />
      <div className="mt-36 mb-56">
        <h1>Unos nove zivotinje</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Unos;
