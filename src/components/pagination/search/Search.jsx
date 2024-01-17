import { useContext, useState } from 'react';
import styles from './Search.module.scss';
import { Context } from '../../../services/Context';

const Search = () => {
  const {
    valueSearch,
    setValueSearch,
    setSlicePokemon,
    data,
    setPage,
    setValueCount,
    setArr,
  } = useContext(Context);
  const blur = (e) => {
    e.target.value.trim() === '' && skip();
  };
  const skip = () => {
    setValueSearch('');
    setSlicePokemon(data.results.slice(0, 10));
  };
  const clickEnter = () => {
    if (valueSearch === '' || valueSearch == '0') return;
    const filter = data.results.filter((poc) => {
      return poc.name.toLowerCase().includes(valueSearch.toLowerCase().trim());
    });
    setValueCount('');
    setPage(0);
    setSlicePokemon(filter);
    setArr([1, 2, 3, 4, 5]);
  };
  const pressEnter = (e) => {
    e.key === 'Enter' && clickEnter();
  };

  return (
    <div className={styles.search} onKeyUp={(e) => pressEnter(e)}>
      <div className={styles.input}>
        <img src="/icons/cross.svg" alt="skip" onClick={() => skip()} />
        <input
          onChange={(e) => setValueSearch(e.target.value)}
          onBlur={(e) => blur(e)}
          type="text"
          value={valueSearch}
          tabIndex={1}
          placeholder="search by name"
        />
        <button onClick={() => clickEnter()} tabIndex={2}>
          ok
        </button>
      </div>
    </div>
  );
};
export default Search;
