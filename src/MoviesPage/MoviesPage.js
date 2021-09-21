import { useState } from 'react';
import MoviesSearch from './MoviesSearch';
import { fetchByInputValue } from '../Api/apiService';
import MoviesList from 'MoviesList/MoviesList';

export default function MoviesPage() {
  const [inputValue, setInputvalue] = useState('');
  const [searchMoviesList, setSearchMoviesList] = useState([]);

  function handleInputChange(e) {
    setInputvalue(e.currentTarget.value.trim());
  }

  function handleMovieSearch() {
    fetchByInputValue(inputValue).then(res => setSearchMoviesList(res.results));
  }

  return (
    <div>
      <MoviesSearch
        inputValue={inputValue}
        onChange={handleInputChange}
        onBtnClick={handleMovieSearch}
      />
      <MoviesList moviesList={searchMoviesList} />
    </div>
  );
}
