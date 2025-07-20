import { useState, useEffect } from "react";
import { getMoviesApiFetch } from "@/services/moviesApi";
import { useDebounce } from "./useDebounce";

export function useMoviesSearch(search: string, page: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(search, 400);

  useEffect(() => {
    if (!debounced) {
      setData(null);
      return;
    }
    setLoading(true);
    getMoviesApiFetch(debounced, page).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [debounced, page]);

  return { data, loading };
} 