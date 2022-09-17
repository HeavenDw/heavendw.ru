import React, { FC, useEffect, useState } from 'react';
import Languages from '../Languages/Languages';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Theme from '../Theme/Theme';
import styles from './Header.module.css';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} _container`}>
        <Logo />
        <div className={isOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
          <Navigation setIsOpen={setIsOpen} />
          <Theme setIsOpen={setIsOpen} />
          <Languages />
        </div>
        <button
          className={isOpen ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
