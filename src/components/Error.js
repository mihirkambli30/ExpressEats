import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>OOPS!! ERROR!!!!</h1>
      <h2>
        {err.status} Error Message: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
