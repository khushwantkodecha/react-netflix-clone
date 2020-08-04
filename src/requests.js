const API_KEY = "796082e2f9fcc201acce08bb47153388";

export const requests = {
  tranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflix_original: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action_movies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy_movies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror_movies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance_movies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
