const API_URL = "https://www.omdbapi.com/";
const API_KEY = "6c864312";
    
export async function getMoviesApiFetch(search: string, page: number) {
  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(search)}&page=${page}`);
    const data = await res.json();
    if (data.Error) {
      return { error: data.Error };
    }
    if (!res.ok) {
      if (res.status === 429) {
        return { error: "Too many requests. Please try again later." };
      }
      return { error: "Something went wrong. Please try again later." };
    }
    return data;
  } catch (error) {
    return { error: "Something went wrong. Please try again later." };
  }
}

export async function getMovieApiFetch(search: string, page: number, slug: string) {
  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&t=${encodeURIComponent(slug)}&page=${page}`);
    const data = await res.json();
    if (data.Error) {
      return { error: data.Error };
    }
    if (!res.ok) {
      if (res.status === 429) {
        return { error: "Too many requests. Please try again later." };
      }
      return { error: "Something went wrong. Please try again later." };
    }
    return data;
  } catch (error) {
    return { error: "Something went wrong. Please try again later." };
  }
}

