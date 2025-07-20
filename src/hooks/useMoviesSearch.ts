import { useState, useEffect } from "react";
import { getMoviesList } from "@/services/moviesApi";
import { useDebounce } from "./useDebounce";

export function useMoviesSearch(search: string, page: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      setData(null);
      return;
    }
    setLoading(true);
    getMoviesList(search, page).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [search, page]);

  return { data, loading };
} 