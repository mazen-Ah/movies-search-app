
  export const getMoviesApiFetch = async (type:string,page:number) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${type}&page=${page}&apikey=6c864312`
  );
  const data = await response.json();
  if (data.Response !== "True" ) return { message: "No results found for your search. Please try a different keyword." } 
  if (!response.ok) return { message: "Sorry, something went wrong. Please try again later." }
  return data;
};

export const getMovieApiFetch = async (type:string,page:number,title:string) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${type}&page=${page}&apikey=6c864312&t=${title}`
    );
    const data = await response.json();
    if (data.Response !== "True" ) return { message: "No results found for your search. Please try a different keyword." } 
    if (!response.ok) return { message: "Sorry, something went wrong. Please try again later." }
    return data;
  };

