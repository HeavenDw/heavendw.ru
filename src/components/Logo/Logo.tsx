import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={styles.img}>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
    </Link>
  );
};

export default Logo;
