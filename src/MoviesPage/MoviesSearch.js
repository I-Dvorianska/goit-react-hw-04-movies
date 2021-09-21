import style from './MoviesSearch.module.css';

export default function MoviesSearch({ onChange, inputValue, onBtnClick }) {
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
