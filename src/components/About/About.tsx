import React from 'react';
import { useTranslation } from 'react-i18next';

import skillsList from '../../data/skillsList';
import Skill from '../Skill/Skill';
import styles from './About.module.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.about}>
        <div className={styles.info}>
          <span className={styles.subtitle}>{t('about0')}</span>

          <p>
            {t('about1')}
            <b>{t('about2')}</b>
            {t('about3')}
          </p>
          <p>{t('about4')}</p>
          <p>{t('about5')}</p>
          <p>{t('about6')}</p>
          <p>
            <b>{t('about7')}</b>
          </p>

          <p>{t('about8')}</p>
        </div>

        <div className={styles.skills}>
          <span className={styles.subtitle}>{t('skills')}:</span>
          <ul className={styles.list}>
            {skillsList.map((skills, index) => (
              <Skill key={index} skills={skills} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + '/photos/01.jpg'} alt="photo01" />
        </div>
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + '/photos/02.jpg'} alt="photo02" />
        </div>
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + '/photos/03.jpg'} alt="photo03" />
        </div>
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + '/photos/04.jpg'} alt="photo04" />
        </div>
      </div>
    </>
  );
};

export default About;
