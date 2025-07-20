import React, { Dispatch } from "react";

const HamburgerMenu = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => (
  <button
    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 relative z-30"
    onClick={onClick}
    aria-label="Toggle navigation"
  >
    <span
      className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${
        open ? "rotate-45 translate-y-2" : ""
      }`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${
        open ? "opacity-0" : ""
      }`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-2" : ""
      }`}
    ></span>
  </button>
);

export default HamburgerMenu;
