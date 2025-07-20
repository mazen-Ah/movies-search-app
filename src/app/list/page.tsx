import { getMoviesApiFetch } from "@/services/moviesApi";
import { Movie } from "@/types/moviesTypes";
import CardMovie from "../_components/CardMovie";

export default async function Home({
  searchParams,
}: {
  searchParams: { type?: string; search?: string };
}) {
  const { search } = await searchParams;
  const data = await getMoviesApiFetch(search || "", 1);

  return (
    <main className="flex gap-6 flex-wrap items-center justify-center container mx-auto p-4">
      {data?.Search?.map((movie: Movie, index: number) => (
        <CardMovie movie={movie} key={movie?.imdbID} />
      ))}
    </main>
  );
}
