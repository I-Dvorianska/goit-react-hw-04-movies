import { useEffect, useState } from 'react';
import { fetchMovieCard } from 'Api/apiService';
import { useParams, Route, useHistory } from 'react-router-dom';
import s from 'MovieDetailsPage/MovieDetailsPage.module.css';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieCast from 'MovieCast/MovieCast';
import MovieReviews from 'MovieReviews/MovieReviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const history = useHistory();
  console.log(history);

  useEffect(() => {
    fetchMovieCard(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  return (
    <>
      <button className={s.button} type="button">
        &#10094; Go Back
      </button>
      <div className={s.wrapper}>
        {movie !== [] && <MovieInfo movie={movie} />}

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
