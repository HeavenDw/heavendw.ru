import React from 'react';
import { useTranslation } from 'react-i18next';
import Skill from '../Skill/Skill';
import styles from './About.module.scss';

const skillsList = [
  {
    id: 1,
    imgSrc: '/icons/html5.svg',
    text: 'HTML5',
  },
  {
    id: 2,
    imgSrc: '/icons/css3.svg',
    text: 'CSS3',
  },
  {
    id: 3,
    imgSrc: '/icons/sass.svg',
    text: 'SCSS',
  },

  {
    id: 4,
    imgSrc: '/icons/tailwind.svg',
    text: 'Tailwind',
  },
  {
    id: 5,
    imgSrc: '/icons/js.svg',
    text: 'JavaScript',
  },
  {
    id: 6,
    imgSrc: '/icons/git.svg',
    text: 'Git',
  },
  {
    id: 7,
    imgSrc: '/icons/github.svg',
    text: 'Github',
  },
  {
    id: 8,
    imgSrc: '/icons/react.svg',
    text: 'React',
  },
  {
    id: 9,
    imgSrc: '/icons/typescript.svg',
    text: 'TypeScript',
  },

  {
    id: 10,
    imgSrc: '/icons/redux.svg',
    text: 'Redux / Redux Toolkit',
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.about}>
        <div className={styles.info}>
          <span>{t('about0')}</span>

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
          <span>{t('skills')}:</span>
          <ul className={styles.list}>
            {skillsList.map((skill) => (
              <Skill key={skill.id} imgSrc={skill.imgSrc} text={skill.text} />
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
