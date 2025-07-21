"use client";
import { useEffect, useState } from "react";
import { useMoviesSearch } from "@/hooks/useMoviesSearch";
import ListCardsMovie from "../_components/ListCardsMovie";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import SkeletonCard from "../_components/SkeletonCard";

export default function Movies() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const debounced = useDebounce(search, 1000);
  const { data, loading } = useMoviesSearch(debounced, page);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debounced) params.set("q", debounced);
    if (page > 1) params.set("page", String(page));
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [debounced, page, router]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
      {loading ? (
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        data?.Search &&
        data.Search.length > 0 && (
          <ListCardsMovie data={data} page={page} setPage={setPage} />
        )
      )}
    </main>
  );
}
