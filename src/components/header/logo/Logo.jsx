import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1>
        P &nbsp;&nbsp;&nbsp;&nbsp;
        <img src="/favicon.svg" alt="logo" />
        KEMONS
      </h1>
    </div>
  );
};
export default Logo;
