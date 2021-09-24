import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'Api/apiService';
import style from './HomePage.module.css';

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setMoviesList(prevState => [...prevState, ...res.results]);
    });
  }, []);

  return (
    <ul>
      {moviesList !== [] &&
        moviesList.map(movie => (
          <li className={style.movieItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.name ? movie.name : movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
