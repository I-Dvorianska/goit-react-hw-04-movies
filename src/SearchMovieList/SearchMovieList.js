import { Link, useRouteMatch } from 'react-router-dom';
import style from './SearchMovieList.module.css';

export default function SearchMovieList({ movieList }) {
  const { path } = useRouteMatch();
  console.log(movieList);

  return (
    <ul>
      {movieList !== [] &&
        movieList.map(movie => (
          <li className={style.movieItem} key={movie.id}>
            <Link to={`${path}/${movie.id}`}>{movie.name ? movie.name : movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
