"use client";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const debounced = useDebounce(search, 400);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    debounced ? params.set("search", search) : params.delete("search");
    router.replace(`?${params}`, { scroll: false });
  }, [debounced]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur shadow-sm rounded-b-xl mb-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <HamburgerMenu
          open={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        />
        <nav
          className={`flex-col md:flex-row md:flex gap-2 md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none rounded-b-xl md:rounded-none transition-all duration-300 z-20 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              pathname === "/"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/list"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              pathname === "/list"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            List Movies
          </Link>
        </nav>
        {pathname === "/list" && (
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-40 md:w-64 ml-2"
            placeholder="Search..."
          />
        )}
      </div>
    </header>
  );
};

export default Header;
