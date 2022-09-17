import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.img}>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
    </div>
  );
};

export default Logo;
