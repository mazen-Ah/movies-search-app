import { getMovieApiFetch } from "@/services/moviesApi";

export default async function Home({ params }: { params: { slug: string } }) {
  console.log(params);
  console.log(params.slug);
  const data = await getMovieApiFetch("", 1, params.slug);
  console.log(data);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 flex items-center justify-center bg-gray-100 p-6">
          <img
            src={data.Poster}
            alt={data.Title}
            className="rounded-xl w-60 h-auto shadow-lg border border-gray-200"
          />
        </div>
        <div className="md:w-2/3 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
              {data.Title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {data.Genre}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                {data.Rated}
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                {data.Runtime}
              </span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {data.Year}
              </span>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">{data.Plot}</p>
            <div className="space-y-2 text-gray-800">
              <div>
                <span className="font-semibold">Director:</span> {data.Director}
              </div>
              <div>
                <span className="font-semibold">Actors:</span> {data.Actors}
              </div>
              <div>
                <span className="font-semibold">Writer:</span> {data.Writer}
              </div>
              <div>
                <span className="font-semibold">Language:</span> {data.Language}
              </div>
              <div>
                <span className="font-semibold">Country:</span> {data.Country}
              </div>
              <div>
                <span className="font-semibold">Box Office:</span>{" "}
                {data.BoxOffice}
              </div>
              <div>
                <span className="font-semibold">Awards:</span> {data.Awards}
              </div>
              <div>
                <span className="font-semibold">Metascore:</span>{" "}
                {data.Metascore}
              </div>
              <div>
                <span className="font-semibold">IMDB:</span> {data.imdbRating} (
                {data.imdbVotes} votes)
              </div>
              {data.Ratings && data.Ratings.length > 0 && (
                <div>
                  <span className="font-semibold">Ratings:</span>
                  <ul className="list-disc list-inside ml-4">
                    {data.Ratings.map((rating: any, idx: number) => (
                      <li key={idx}>
                        {rating.Source}: {rating.Value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 flex">
            <a
              href={`https://www.imdb.com/title/${data.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
            >
              View on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
