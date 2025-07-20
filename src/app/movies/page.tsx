"use client";
import { useState } from "react";
import { useMoviesSearch } from "@/hooks/useMoviesSearch";
import ListCardsMovie from "../_components/ListCardsMovie";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading } = useMoviesSearch(search, page);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setPage(1);
  };
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <input
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-60 md:w-96"
          placeholder="Search for movies..."
        />
      </div>
      {/* {loading && <div className="text-center">Loading...</div>} */}
      {!search && (
        <div className="text-center text-gray-500">
          Type a movie name to search.
        </div>
      )}
      {!loading && data?.error && (
        <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded p-4 max-w-xl mx-auto">
          {data.error}
        </div>
      )}
      {data?.Search && data.Search.length > 0 && (
        <ListCardsMovie data={data} page={page} setPage={setPage} />
      )}
    </main>
  );
}
