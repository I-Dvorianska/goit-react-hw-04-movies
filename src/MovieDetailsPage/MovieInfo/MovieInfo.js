import { NavLink, useRouteMatch } from 'react-router-dom';
import s from 'MovieDetailsPage/MovieInfo/MovieInfo.module.css';

export default function MovieInfo({ movie }) {
  const { url } = useRouteMatch();
  const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

  function movieGenres() {
    if (movie.genres) {
      const genreArray = movie.genres.map(genre => {
        return genre.name;
      });
      return genreArray.join(', ');
    }
  }

  return (
    <>
      <div className={s.wrapper}>
        <img
          src={movie.poster_path && `${IMG_BASE}${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div className={s.info}>
          <h1>{movie.original_title}</h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movieGenres()}</p>
        </div>
      </div>

      <ul className={s.list}>
        <li>
          <NavLink className={s.links} activeClassName={s.activeLink} to={`${url}/cast`}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={s.links} activeClassName={s.activeLink} to={`${url}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
}
