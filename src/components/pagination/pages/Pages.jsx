import { useContext, useEffect, useState } from 'react';
import styles from './Pages.module.scss';
import { Context } from '../../../services/Context';
const Pages = () => {
  const {
    arr,
    setArr,
    setSlicePokemon,
    data,
    valueCount,
    countPages,
    page,
    setPage,
    setValueSearch,
  } = useContext(Context);

  const [basePages, setBasePages] = useState();
  const [lastPage, setLastPage] = useState(false);
  const [firstPage, setFirstPage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const pages = [...document.getElementsByName('page')];
    pages.forEach((page) => page.classList.replace(styles.active, styles.page));
    setBasePages(pages[0].id === 'page-0');
    const active_page = document.getElementById('page-' + page);
    active_page && active_page.classList.replace(styles.page, styles.active);
    setLastPage(page === Number(pages[4].id.split('-')[1]));
    setFirstPage(page === Number(pages[0].id.split('-')[1]));
  }, [page]);

  const clickPage = (e) => {
    const id = e.target.id.split('-')[1];
    changePage(Number(id));
  };

  const next = (e) => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 1500);
    if (page + 1 < countPages) {
      const id = e.target.id.split('-')[1];
      changePage(id);
      if (lastPage) {
        const newArr = arr.map((n) => n + 1);
        setArr(newArr);
      }
    }
  };

  const prev = (e) => {
    if (page !== 0) {
      const id = e.target.id.split('-')[1];
      changePage(id);
      if (!basePages && firstPage) {
        const newArr = arr.map((n) => n - 1);
        setArr(newArr);
      }
    }
  };

  const changePage = (id) => {
    setValueSearch('');
    let num = 0;
    const countPages = valueCount ? valueCount : 10;
    if (id === 'next') {
      setPage((page) => page + 1);
      num = page + 1;
    }
    if (id === 'prev') {
      setPage((page) => page - 1);
      num = page - 1;
    }
    if (typeof id === 'number') {
      setPage(id);
      num = id;
    }
    const first = num * countPages;
    const second = (num + 1) * countPages;
    setSlicePokemon(data.results.slice(first, second));
  };
  return (
    <div className={styles.pages_container}>
      <div className={styles.arrow} id="div-prev" onClick={(e) => prev(e)}>
        <img src="/icons/arrow.svg" alt="prev" id="img-prev" />
      </div>
      <div className={styles.pages}>
        {arr.map((n) => {
          return (
            <div
              className={styles.page}
              onClick={(e) => clickPage(e)}
              id={'page-' + (n - 1)}
              key={n}
              name="page"
            >
              {n}
            </div>
          );
        })}
      </div>
      <button
        disabled={isDisabled}
        className={styles.arrow}
        style={{ opacity: isDisabled && 0.5 }}
        id="div-next"
        onClick={(e) => next(e)}
      >
        <img
          src="/icons/arrow.svg"
          alt="next"
          id="img-next"
          className={styles.next}
        />
      </button>
    </div>
  );
};
export default Pages;
