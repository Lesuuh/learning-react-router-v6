import { Link, useRouteError } from "react-router-dom";

export const CareersError = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/" className="underline">
        Go back to homepage
      </Link>
    </div>
  );
};
