"use client";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const debounced = useDebounce(search, 400);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    debounced ? params.set("search", search) : params.delete("search");
    router.replace(`?${params}`, { scroll: false });
  }, [debounced]);

  return (
    <header className="h-20 flex items-center justify-between px-4 border-b mb-4">
      <nav className="flex gap-4">
        <Link href="/" className="font-semibold hover:underline">
          Home
        </Link>
        <Link href="/list" className="font-semibold hover:underline">
          List Movies
        </Link>
      </nav>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded"
        placeholder="Search..."
      />
    </header>
  );
};

export default Header;
