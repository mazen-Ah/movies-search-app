export default async function Home() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12 mb-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2">Welcome to Movie Explorer</h1>
      <p className="text-lg mb-4 max-w-xl text-center">
        Discover, search, and explore your favorite movies. Use the search bar
        above to find any movie, or browse our featured selection below!
      </p>
    </section>
  );
}
