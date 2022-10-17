import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

import styles from './Languages.module.scss';

const Languages: FC = () => {
  const { t, i18n } = useTranslation();

  const setLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.root}>
      <span>{t('language')}:</span>
      <button
        key={'En'}
        type="submit"
        className={i18n.resolvedLanguage === 'En' ? styles.active : ''}
        onClick={() => setLanguage('En')}>
        <ReactCountryFlag
          countryCode="US"
          style={{
            fontSize: '16px',
            lineHeight: '16px',
          }}
          svg
        />
        {t('langEn')}
      </button>
      <div className={styles.delimiter}></div>

      <button
        key={'Ru'}
        className={i18n.resolvedLanguage === 'Ru' ? styles.active : ''}
        type="submit"
        onClick={() => setLanguage('Ru')}>
        <ReactCountryFlag
          countryCode="RU"
          style={{
            fontSize: '16px',
            lineHeight: '16px',
          }}
          svg
        />
        {t('langRu')}
      </button>
    </div>
  );
};

export default Languages;
