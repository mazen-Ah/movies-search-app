"use client";
import React from "react";
import Image from "next/image";
import { Movie } from "@/types/moviesTypes";
import Link from "next/link";

type Props = { movie: Movie };

const CardMovie = ({ movie }: Props) => {
  const posterSrc =
    movie?.Poster && movie?.Poster !== "N/A"
      ? movie?.Poster
      : "https://placehold.co/600x400";
  return (
    <Link
      href={`/movies/${movie?.Title?.replaceAll(" ", "-").toLowerCase()}`}
      key={movie?.imdbID}
      className="flex flex-col items-center gap-2 bg-white/90 rounded-xl shadow-md p-4 transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 w-[220px] h-[380px] min-w-[220px] min-h-[380px] max-w-[220px] max-h-[380px]"
    >
      <Image
        src={posterSrc}
        // placeholder="blur"
        alt={movie?.Title}
        loading="lazy"
        width={180}
        height={220}
        className="rounded-lg object-cover bg-gray-200 h-[260px]"
      />
      <span className="text-center text-base font-semibold text-gray-900 line-clamp-2">
        {movie?.Title}
      </span>
      <span className="text-gray-500 text-sm">{movie?.Year}</span>
    </Link>
  );
};

export default CardMovie;
