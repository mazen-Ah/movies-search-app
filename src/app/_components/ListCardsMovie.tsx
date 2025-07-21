import React from "react";
import CardMovie from "./CardMovie";
import type { MoviesApiResponse, Movie } from "@/types/moviesTypes";

interface Props {
  data: MoviesApiResponse;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ListCardsMovie = ({ data, page, setPage }: Props) => {
  return (
    <>
      <div className="flex gap-6 flex-wrap items-center justify-center">
        {data.Search.map((movie: Movie) => (
          <CardMovie movie={movie} key={movie.imdbID} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12 gap-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold text-gray-700">
            Page {page}
          </span>
        </div>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={data.Search.length < 10}
          className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Next
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ListCardsMovie;
