import { useContext, useState } from 'react';
import styles from './Count.module.scss';
import { Context } from '../../../services/Context';

const Count = () => {
  const [max, setMax] = useState(false);
  const {
    valueCount,
    setValueCount,
    setValueSearch,
    setSlicePokemon,
    data,
    setCountPages,
    setPage,
  } = useContext(Context);
  const focus = () => {
    setMax(false);
  };
  const blur = (e) => {
    e.target.value.trim() === '' && skip();
  };
  const skip = () => {
    setValueCount('');
    setSlicePokemon(data.results.slice(0, 10));
  };
  const clickEnter = () => {
    if (valueCount === '' || valueCount == '0') return;
    if (Number(valueCount) <= 30) {
      setValueSearch('');
      setPage(0);
      setCountPages(Math.round(1000 / valueCount));
      setSlicePokemon(data.results.slice(0, valueCount));
      setMax(false);
    } else setMax(true);
  };
  const pressEnter = (e) => {
    e.key === 'Enter' && clickEnter();
  };
  return (
    <div onKeyUp={(e) => pressEnter(e)}>
      <div className={styles.search}>
        <img src="/icons/cross.svg" alt="skip" onClick={() => skip()} />
        <input
          onChange={(e) => setValueCount(e.target.value)}
          onFocus={(e) => focus(e)}
          onBlur={(e) => blur(e)}
          type="text"
          value={valueCount}
          tabIndex={3}
          placeholder="pokemons on page"
        />
        <button onClick={() => clickEnter()} tabIndex={4}>
          ok
        </button>
      </div>
      <div className={styles.warning}>
        {max && (
          <div className={styles.error}>Максимальное число покемонов 30</div>
        )}
      </div>
    </div>
  );
};
export default Count;
