import location from "../../assets/slike/location.png";

function LocationPin({ text }) {
  return (
    <div>
      <img className="w-[50px] h-[50px]" src={location} alt="pin" />
      <p>{text}</p>
    </div>
  );
}

export default LocationPin;
