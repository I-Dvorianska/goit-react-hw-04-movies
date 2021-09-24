import { useEffect, useState } from 'react';
import { fetchMovieCard } from 'Api/apiService';
import { useParams, Route } from 'react-router-dom';
import s from 'MovieDetailsPage/MovieDetailsPage.module.css';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieCast from 'MovieCast/MovieCast';
import MovieReviews from 'MovieReviews/MovieReviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCard(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {movie !== [] && <MovieInfo movie={movie} />}

      <Route path="/movies/:movieId/cast">
        <MovieCast id={movieId} />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <MovieReviews id={movieId} />
      </Route>
    </div>
  );
}
