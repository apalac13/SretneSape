import { useLocation } from "react-router-dom";
import error404 from "../assets/slike/Error404.jpg";

export default function ErrorStranica() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen mt-12 flex flex-col items-center bg-[#fff]">
      <div className="bg-[#fff] text-2xl">
        <h1>Oops!</h1>
        <p>Sorry, page not found or an unexpected error has occurred.</p>
        <p>
          <i>{location.pathname}</i>
        </p>
      </div>
      <img src={error404} alt="Error404" className="w-screen h-full" />
    </div>
  );
}
