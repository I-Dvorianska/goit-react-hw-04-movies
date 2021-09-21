import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'Api/apiService';
import MoviesList from 'MoviesList/MoviesList';

export default function HomePage() {
  const [homeMovies, setHomeMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setHomeMovies(res.results);
    });
  }, []);

  return <MoviesList moviesList={homeMovies} />;
}
