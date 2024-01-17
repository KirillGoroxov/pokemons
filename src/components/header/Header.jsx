import styles from './Header.module.scss';
import Logo from './logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
export default Header;
