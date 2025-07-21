export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
  
  export type MovieList = Movie[];

export type MoviesApiResponse = {
  Search: Movie[];
  totalResults: string;
  Response: string;
  error?: string;
};