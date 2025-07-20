import React from "react";
import CardMovie from "./CardMovie";

type Props = { data: any; page: number; setPage: any };

const ListCardsMovie = ({ data, page, setPage }: Props) => {
  return (
    <>
      <div className="flex gap-6 flex-wrap items-center justify-center">
        {data.Search.map((movie: any) => (
          <CardMovie movie={movie} key={movie.imdbID} />
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setPage((p: any) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          onClick={() => setPage((p: any) => p + 1)}
          disabled={data.Search.length < 10}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ListCardsMovie;
