# Movie Explorer

A modern, responsive movie search app built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Search for movies, view details, and enjoy a clean, mobile-friendly UI powered by the OMDb API.

---

## Features

- 🔍 **Movie Search:** Search for movies by title with instant results and pagination.
- 📄 **Movie Details:** Click any movie to view full details, including poster, plot, cast, and more.
- 🖼️ **Responsive UI:** Clean, modern design with Tailwind CSS. Works great on mobile and desktop.
- ⚡ **Performance:** Debounced search input, paginated results, and optimized image loading.
- 🛡️ **Error Handling:** Graceful fallback for API/network errors and missing data.
- 🧩 **Modular Code:** Reusable components and custom hooks for maintainability.
- 📝 **TypeScript:** Type-safe code with clear types for movies and API responses.

---

## Getting Started

### 1. **Install Dependencies**

```bash
npm install
```

### 2. **Set Up OMDb API Key**

- The OMDb API key is currently hardcoded for demo purposes.
- For production, set your key in an environment variable:  
  `NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here`

### 3. **Run the Development Server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
src/
  app/
    _components/      # Reusable UI components (Header, CardMovie, ListCardsMovie)
    movies/           # Movies search and details pages
      [slug]/         # Dynamic route for movie details
    page.tsx          # Home page (hero + preview)
    layout.tsx        # App layout
    loading.tsx       # Global loading state
    not-found.tsx     # 404 page
    globals.css       # Tailwind/global styles
  hooks/
    useMoviesSearch.ts # Custom hook for search & pagination
    useDebounce.ts     # Debounce hook for search input
  services/
    moviesApi.ts      # API utilities for OMDb
  types/
    moviesTypes.ts    # TypeScript types for movies
```

---

## Key Components & Hooks

- **Header:** Navigation bar with links to Home and Movies.
- **CardMovie:** Displays a movie poster, title, and year.
- **ListCardsMovie:** Renders a paginated grid of movie cards.
- **useMoviesSearch:** Custom hook for debounced search and paginated fetching.
- **useDebounce:** Utility hook for debouncing input values.

---

## API & Data Fetching

- Uses the [OMDb API](https://www.omdbapi.com/) for all movie data.
- All API calls are wrapped with error handling for throttling, network, and OMDb errors.
- Movie details and search results are type-safe.

---

## Error Handling

- User-friendly messages for API errors, no results, and network issues.
- Loading spinners for async operations.
- Fallback images for missing posters.

---

## Customization

- **Styling:** Easily customize with Tailwind utility classes.
- **API Key:** Replace the demo OMDb key with your own for production.
- **Components:** Extend or replace components for your needs.

---

## License

This project is for educational and demonstration purposes.

---

## Credits

- [OMDb API](https://www.omdbapi.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Enjoy exploring movies!**  
If you have questions or want to contribute, feel free to open an issue or PR.
