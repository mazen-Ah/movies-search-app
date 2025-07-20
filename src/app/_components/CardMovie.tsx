import React from "react";
import Image from "next/image";
import { Movie } from "@/types/moviesTypes";
import Link from "next/link";

type Props = { movie: Movie };

const CardMovie = ({ movie }: Props) => {
  console.log(movie);

  return (
    <Link
      href={`list/${movie.Title.replaceAll(" ", "-").toLowerCase()}`}
      key={movie.imdbID}
      className="flex flex-col items-center gap-2"
    >
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={200}
        height={300}
        className="rounded-lg"
      />
      <span className="text-center">{movie.Title}</span>
      <span className="text-gray-500">{movie.Year}</span>
    </Link>
  );
};

export default CardMovie;
