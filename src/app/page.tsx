import { getMoviesApiFetch } from "@/services/moviesApi";
import CardMovie from "./_components/CardMovie";
import Link from "next/link";

export default async function Home() {
  const data = await getMoviesApiFetch("action", 1);
  const previewMovies = data.Search?.slice(0, 6) || [];

  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-col items-center justify-center text-center py-12 mb-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Welcome to <span className="text-blue-600">Movie Explorer</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-600">
          Discover, search, and explore your favorite movies. Browse a few
          popular picks below, or click to see more!
        </p>
        <Link
          href="/movies"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Explore All Movies
        </Link>
      </section>

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
