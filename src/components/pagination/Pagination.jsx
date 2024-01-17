import styles from './Pagination.module.scss';
import Count from './count/Count';
import Pages from './pages/Pages';
import Search from './search/Search';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <Search />
      <Pages />
      <Count />
    </div>
  );
};
export default Pagination;
