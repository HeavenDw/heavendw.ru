import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} _container`}>
        <ul>
          <li>
            <Link to="/">Портфолио</Link>
          </li>
          <li>
            <Link to="/about">Обо мне</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
        </div>
      </div>
      {/* <h1 className={styles.title}>Портфолио</h1> */}
    </header>
  );
};

export default Header;
