import { useEffect } from 'react';
import { fetchMovieCard } from 'Api/apiService';
import { useParams, Route } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieCast from 'MovieCast/MovieCast';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCard(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  return (
    <>
      {movie !== [] && <MovieInfo movie={movie} />}

      <Route path="/movies/:movieId/cast">
        <MovieCast id={movieId} />
      </Route>
    </>
  );
}
