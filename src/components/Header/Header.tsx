import React, { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Портфолио</h1>
      <div className={styles.img}>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
      </div>
    </header>
  );
};

export default Header;
