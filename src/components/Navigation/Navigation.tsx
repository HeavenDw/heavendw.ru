import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

interface NavigationProps {
  setIsOpen: (value: boolean) => void;
}

const Navigation: FC<NavigationProps> = ({ setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? styles.active : '')}
            onClick={() => {
              setIsOpen(false);
            }}>
            {t('portfolio')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? styles.active : '')}
            onClick={() => {
              setIsOpen(false);
            }}>
            {t('about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={(navData) => (navData.isActive ? styles.active : '')}
            onClick={() => {
              setIsOpen(false);
            }}>
            {t('contacts')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
