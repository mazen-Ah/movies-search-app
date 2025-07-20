"use client";
import React from "react";
import Image from "next/image";
import { Movie } from "@/types/moviesTypes";
import Link from "next/link";

type Props = { movie: Movie };

const CardMovie = ({ movie }: Props) => {
  const [imgError, setImgError] = React.useState<boolean>(false);
  const posterSrc =
    movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png";
  return (
    <Link
      href={`/movies/${movie?.Title?.replaceAll(" ", "-").toLowerCase()}`}
      key={movie?.imdbID}
      className="flex flex-col items-center gap-2 bg-white/90 rounded-xl shadow-md p-4 transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 w-[220px] h-[380px] min-w-[220px] min-h-[380px] max-w-[220px] max-h-[380px]"
    >
      <Image
        src={!imgError ? posterSrc : "/placeholder.png"}
        alt={movie?.Title}
        // priority
        onError={() => setImgError(true)}
        loading="lazy"
        width={180}
        height={260}
        className="rounded-lg object-cover bg-gray-200"
      />
      <span className="text-center font-semibold text-gray-900 mt-2 line-clamp-2">
        {movie?.Title}
      </span>
      <span className="text-gray-500 text-sm">{movie?.Year}</span>
    </Link>
  );
};

export default CardMovie;
