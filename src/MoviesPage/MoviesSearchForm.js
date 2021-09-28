import style from './MoviesSearch.module.css';
import PropTypes from 'prop-types';

export function MoviesSearchForm({ onChange, inputValue, onBtnClick }) {
  return (
    <>
      <input
        onChange={onChange}
        type="text"
        name="movie"
        placeholder="Movie"
        value={inputValue}
        className={style.searchInput}
      />
      <button className={style.searchBtn} onClick={onBtnClick}>
        Search
      </button>
    </>
  );
}

MoviesSearchForm.propTypes = {
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
  onBtnClick: PropTypes.func,
};
