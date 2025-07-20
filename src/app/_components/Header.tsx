"use client";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const debounced = useDebounce(search, 400);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    debounced ? params.set("search", search) : params.delete("search");
    router.replace(`?${params}`, { scroll: false });
  }, [debounced]);

  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur shadow-sm rounded-b-xl mb-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <nav className="flex gap-2 md:gap-4">
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
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-48 md:w-64"
            placeholder="Search..."
          />
        )}
      </div>
    </header>
  );
};

export default Header;
