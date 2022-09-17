import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Languages from '../Languages/Languages';
import Theme from '../Theme/Theme';
import styles from './Header.module.css';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={`${styles.container} _container`}>
        <ul>
          <li>
            <Link to="/">{t('portfolio')}</Link>
          </li>
          <li>
            <Link to="/about">{t('about')}</Link>
          </li>
          <li>
            <Link to="/contacts">{t('contacts')}</Link>
          </li>
        </ul>
        <Theme />
        <Languages />
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
