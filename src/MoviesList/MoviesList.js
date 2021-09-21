import style from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export default function MoviesList({ moviesList }) {
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
