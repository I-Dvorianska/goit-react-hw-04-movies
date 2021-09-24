import { NavLink, useRouteMatch } from 'react-router-dom';

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
    <div>
      <img
        src={movie.poster_path && `${IMG_BASE}${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h1>{movie.original_title}</h1>
      <p>User Score: </p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movieGenres()}</p>

      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}
