"use client";
import { useState, useEffect } from "react";
import { getMoviesApiFetch } from "@/services/moviesApi";
import CardMovie from "./_components/CardMovie";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      setData(null);
      return;
    }
    setLoading(true);
    getMoviesApiFetch(search, page).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [search, page]);

  // Reset search and page on mount (navigation)
  useEffect(() => {
    setSearch("");
    setPage(1);
  }, []);

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-60 md:w-96"
          placeholder="Search for movies..."
        />
      </div>
      {loading && <div className="text-center">Loading...</div>}
      {!search && (
        <div className="text-center text-gray-500">
          Type a movie name to search.
        </div>
      )}
      {data?.error && (
        <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded p-4 max-w-xl mx-auto">
          {data.error}
        </div>
      )}
      {data?.Search && data.Search.length > 0 && (
        <>
          <div className="flex gap-6 flex-wrap items-center justify-center">
            {data.Search.map((movie: any) => (
              <CardMovie movie={movie} key={movie.imdbID} />
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">{page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={data.Search.length < 10}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}
