import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 animate-fade-in">
          Welcome to <span className="text-blue-600">Movie Explorer</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-600 animate-fade-in delay-200">
          Discover, search, and explore your favorite movies. Use the search bar
          above to find any movie, or browse our featured selection below!
        </p>
        <Link
          href="/list"
          className="mt-2 px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition-all duration-300 animate-fade-in delay-400"
        >
          Browse Movies
        </Link>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
    </section>
  );
}
