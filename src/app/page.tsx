import { getMoviesApiFetch } from "@/services/moviesApi";
import { Movie } from "@/types/moviesTypes";
import CardMovie from "./_components/CardMovie";

export default async function Home({
  searchParams,
}: {
  searchParams: { type?: string; search?: string };
}) {
  const { search } = await searchParams;
  const data = await getMoviesApiFetch(search || "", 1);

  return (
    <main className="flex gap-6 flex-wrap items-center justify-center container mx-auto p-4">
      {data?.Search && data.Search.length > 0 ? (
        data.Search.map((movie: Movie, index: number) => (
          <CardMovie movie={movie} key={movie?.imdbID} />
        ))
      ) : (
        <section className="min-h-[90vh] flex flex-col items-center justify-center bg-white overflow-hidden">
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 animate-fade-in">
              Welcome to <span className="text-blue-600">Movie Explorer</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-600 animate-fade-in delay-200">
              Discover, search, and explore your favorite movies. Use the search
              bar above to find any movie, or browse our featured selection
              below!
            </p>
          </div>
          <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        </section>
      )}
    </main>
  );
}
