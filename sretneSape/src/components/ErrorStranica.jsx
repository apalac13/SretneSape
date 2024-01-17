import { useRouteError } from "react-router-dom";

function ErrorStranica(props) {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <img
        src="../../slike/Error404.jpg"
        alt="Error404"
        className="w-[1440px] h-[1200px]"
      />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorStranica;
