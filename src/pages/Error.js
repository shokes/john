import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="container mt-28 grid justify-center">
      <h2 className="text-9xl font-bold">404</h2>
      <p className="text-center text-4xl">Page not found</p>
      <Link to="/" className="mt-8 text-center font-bold text-2xl">
        Back to homepage
      </Link>
    </div>
  );
};
