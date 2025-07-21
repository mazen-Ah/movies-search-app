"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Movie } from "@/types/moviesTypes";
import Link from "next/link";

type Props = { movie: Movie };

const CardMovie = ({ movie }: Props) => {
  const [imgError, setImgError] = useState(false);
  const placeholderUrl = "https://placehold.co/180x260?text=No+Image";
  const posterSrc =
    !imgError && movie?.Poster && movie?.Poster !== "N/A"
      ? movie?.Poster
      : placeholderUrl;

  return (
    <Link
      href={`/movies/${movie?.Title?.replaceAll(" ", "-").toLowerCase()}`}
      className="flex flex-col items-center gap-2 bg-white/90 rounded-xl shadow-md p-4 transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 w-[220px] h-[380px] min-w-[220px] min-h-[380px] max-w-[220px] max-h-[380px]"
    >
      <Image
        src={posterSrc}
        alt={movie?.Title}
        loading="lazy"
        width={180}
        height={260}
        className="rounded-lg bg-gray-200"
        style={{ width: "180px", height: "260px", objectFit: "cover" }}
        onError={() => setImgError(true)}
      />
      <span className="text-center text-base font-semibold text-gray-900 line-clamp-2">
        {movie?.Title}
      </span>
      <span className="text-gray-500 text-sm">{movie?.Year}</span>
    </Link>
  );
};

export default CardMovie;
