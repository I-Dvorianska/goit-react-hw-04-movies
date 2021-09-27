import { Link, useLocation } from 'react-router-dom';
import style from './MovieList.module.css';

export default function SearchMovieList({ list }) {
  const location = useLocation();

  return (
    <ul>
      {list !== [] &&
        list.map(movie => (
          <li className={style.movieItem} key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.name ? movie.name : movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
