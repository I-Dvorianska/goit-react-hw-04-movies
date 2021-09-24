import { useEffect } from 'react';
import { fetchMovieCard } from 'Api/apiService';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import MovieInfo from './MovieInfo/MovieInfo';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCard(movieId).then(res => {
      console.log(res);
      setMovie(res);
    });
  }, [movieId]);

  return <>{movie !== [] && <MovieInfo movie={movie} />}</>;
}
