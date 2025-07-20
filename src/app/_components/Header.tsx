import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur shadow-sm rounded-b-xl ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center text-lg font-bold text-blue-700 hover:text-blue-900 transition select-none "
        >
          Movie Explorer
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="text-blue-700 hover:text-blue-900 font-semibold"
          >
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
