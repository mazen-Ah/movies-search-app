const API_URL = "https://www.omdbapi.com/";
const API_KEY = "6c864312"; 


async function fetchFromApi(params: Record<string, string>) {
  try {
    const query = new URLSearchParams({ apikey: API_KEY, ...params }).toString();
    const res = await fetch(`${API_URL}?${query}`);
    const data = await res.json();
    if (data.Error) return { error: data.Error };
    if (!res.ok) {
      if (res.status === 429) return { error: "Too many requests. Please try again later." };
      return { error: "Something went wrong. Please try again later." };
    }
    return data;
  } catch {
    return { error: "Something went wrong. Please try again later." };
  }
}


export async function getMoviesApiFetch(search: string, page: number) {
  return fetchFromApi({ s: search, page: page.toString() });
}


export async function showMovieDetails(slug: string) {
  return fetchFromApi({ t: slug });
}