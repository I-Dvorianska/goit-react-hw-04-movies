import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'Api/ApiService';
import style from './HomeView.module.css';

export default function HomeView() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      console.log(res.results);
      setMoviesList(prevState => [...prevState, ...res.results]);
    });
  }, []);

  return (
    <ul>
      {moviesList &&
        moviesList.map(movie => (
          <li className={style.movieItem} key={movie.id}>
            <Link to={`/movies.${movie.id}`}>
              {movie.name} {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
