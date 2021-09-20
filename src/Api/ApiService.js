const URL = 'https://api.themoviedb.org/3/';
const KEY = '2943255caf6b2413e0db92dae35dd5ca';

export async function fetchTrendingMovies() {
  const response = await fetch(`${URL}trending/movies/day?api_key=${KEY}`);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}
