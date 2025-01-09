import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-2xl md:text-3xl font-light mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/HealthCare"
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
