import LocationPin from "./LocationPin";
import GoogleMapReact from "google-map-react";

function Map({ location, zoomLevel }) {
  return (
    <div className="flex flex-col">
      <h2 className=" text-2xl max-[1022px]:text-xl text-black-46/90 ">
        Hrvatskih branitelja 2, Grude 88340 <br /> Bosna i Hercegovina
      </h2>

      <div className=" mt-3 w-full h-[319px] ">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAQHjuVyBe8-e1YDYJ_wAAfPnPG48dgj1Q" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
