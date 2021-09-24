const URL = 'https://api.themoviedb.org/3';
const KEY = '2943255caf6b2413e0db92dae35dd5ca';

export async function fetchTrendingMovies() {
  const response = await fetch(`${URL}/trending/movie/day?api_key=${KEY}`);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export async function fetchByInputValue(searchQuery) {
  const response = await fetch(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&page=1&query=${searchQuery}`,
  );
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

// export async function fetchMovieCard(id) {
//   const response = await fetch(`${URL}/movie/${id}?api_key=${KEY}&language=en-US`);
//   return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
// }

export async function fetchMovieCard(id) {
  return await fetch(`${URL}/movie/${id}?api_key=${KEY}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`404 Not Found`));
  });
}
