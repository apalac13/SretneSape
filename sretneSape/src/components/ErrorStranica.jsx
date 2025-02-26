import { useRouteError } from "react-router-dom";
import error404 from "../assets/slike/Error404.jpg";

function ErrorStranica(props) {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center bg-[#fff]">
      <div className="bg-[#fff] text-2xl">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <img src={error404} alt="Error404" className="w-[1300px] h-[1000px]" />
    </div>
  );
}

export default ErrorStranica;
