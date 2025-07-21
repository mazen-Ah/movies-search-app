import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
