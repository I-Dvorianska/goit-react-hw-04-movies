import { useState } from 'react';
import style from './MoviesPage.module.css';
export default function MoviesPage() {
  const [inputValue, setInputvalue] = useState('');

  function handleInputChange(e) {
    setInputvalue(e.currentTarget.value);
  }

  return (
    <div>
      <input
        onChange={handleInputChange}
        type="text"
        name="movie"
        placeholder="Movie"
        value={inputValue}
        className={style.searchInput}
      />
      <button className={style.searchBtn}>Search</button>
    </div>
  );
}
