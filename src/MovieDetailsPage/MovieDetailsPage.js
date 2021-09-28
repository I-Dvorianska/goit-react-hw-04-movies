import { useEffect, useState } from 'react';
import { fetchMovieCard } from 'Api/apiService';
import { useParams, Route, useHistory, useLocation } from 'react-router-dom';
import s from 'MovieDetailsPage/MovieDetailsPage.module.css';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieCast from 'MovieCast/MovieCast';
import MovieReviews from 'MovieReviews/MovieReviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieCard(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button className={s.button} type="button" onClick={onGoBack}>
        &#10094; Go Back
      </button>
      <div className={s.wrapper}>
        {movie !== {} && <MovieInfo movie={movie} moviesLocation={location.state.from} />}

        <Route path="/movies/:movieId/cast">
          <MovieCast id={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <MovieReviews id={movieId} />
        </Route>
      </div>
    </>
  );
}
