import { useEffect, useState } from 'react';
import { MoviesSearchForm } from './MoviesSearchForm';
import SearchMovieList from '../SearchMovieList/SearchMovieList';
import { fetchByInputValue } from '../Api/apiService';
import { Route, useHistory, useLocation, useRouteMatch } from 'react-router';

export default function MoviesPage() {
  const [inputValue, setInputvalue] = useState('');
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  const { path } = useRouteMatch();
  const location = useLocation();
  // const history = useHistory();

  function handleInputChange(e) {
    setInputvalue(e.currentTarget.value.trim());
  }

  function handleMovieSearch() {
    fetchByInputValue(inputValue).then(res => setSearchMoviesList(res.results));
  }

  // function changeParams() {
  //   history.push({
  //     ...location,
  //     search: `query=${inputValue}`,
  //   });
  // }

  // useEffect(() => {
  //   if (inputValue === '') return;
  //   if (inputValue !== '') {
  //     history.push({
  //       ...location,
  //       search: `query=${inputValue}`,
  //     });
  //   }
  // }, [history, location]);

  // console.log(location);
  // console.log(location.search);
  // console.log(`${path}${location.search}`);

  return (
    <div>
      <MoviesSearchForm
        inputValue={inputValue}
        onChange={handleInputChange}
        onBtnClick={handleMovieSearch}
      />
      <Route path={`${path}${location.search}`}>
        <SearchMovieList movieList={searchMoviesList} />
      </Route>
    </div>
  );
}
