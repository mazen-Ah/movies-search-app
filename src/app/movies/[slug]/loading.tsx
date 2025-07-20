import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <div className="text-lg text-gray-700 font-semibold">Loading...</div>
    </div>
  );
};

export default loading;
