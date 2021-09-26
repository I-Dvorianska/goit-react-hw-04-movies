import { useState } from 'react';
import { MoviesSearchForm } from './MoviesSearchForm';
import MovieList from '../MovieList/MovieList';
import { fetchByInputValue } from '../Api/apiService';
import { useHistory, useLocation, useRouteMatch, Route } from 'react-router-dom';

export default function MoviesPage() {
  const [inputValue, setInputvalue] = useState('');
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  function handleInputChange(e) {
    setInputvalue(e.currentTarget.value.trim());
  }

  function handleMovieSearch() {
    if (inputValue) {
      fetchByInputValue(inputValue).then(res => setSearchMoviesList(res.results));
      changeQuery();
    }
  }

  function changeQuery() {
    history.push({
      ...location,
      search: `query=${inputValue}`,
    });
  }

  console.log(`${path}${location.search}`);

  return (
    <div>
      <MoviesSearchForm
        inputValue={inputValue}
        onChange={handleInputChange}
        onBtnClick={handleMovieSearch}
      />

      <MovieList movieList={searchMoviesList} />

      {/* <ul>
        {searchMoviesList !== [] &&
          searchMoviesList.map(movie => (
            <li className={s.movieItem} key={movie.id}>
              <Link to={`${path}/${movie.id}`}>{movie.name ? movie.name : movie.title}</Link>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
