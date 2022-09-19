import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';

import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={'_container'}>
        <Logo />
        <span>{t('footer')}</span>
        <span>©2022</span>
      </div>
    </footer>
  );
};

export default Footer;
