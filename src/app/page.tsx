import { getMoviesList } from "@/services/moviesApi";
import CardMovie from "./_components/CardMovie";
import Link from "next/link";
import HeroSection from "./_components/HeroSection";

export default async function Home() {
  const data = await getMoviesList("action", 1);
  const previewMovies = data.Search?.slice(0, 6) || [];

  return (
    <main className="container mx-auto p-4">
      <HeroSection />
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
          Popular Picks
        </h2>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {previewMovies.map((movie: any) => (
            <CardMovie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </section>
    </main>
  );
}
