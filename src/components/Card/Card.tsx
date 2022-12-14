import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CardItem } from '../../@types/cardTypes';
import styles from './Card.module.scss';

const Card: FC<CardItem> = ({ href, title, description, imgSrc, githubLinks }) => {
  const { t } = useTranslation();

  const linksWithoutHttps = githubLinks.map((link) => link.replace('https://', ''));

  //githubLink.replace('https://', '');

  return (
    <div className={styles.root}>
      <a target="_blank" rel="noreferrer" href={href} className={styles.siteLink}>
        <div className={styles.img}>
          <img src={process.env.PUBLIC_URL + imgSrc} alt={title} />
          <i>
            <svg xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.2667 11.7333C19.0667 10.4666 17.4667 9.59993 15.8 9.2666C15.0667 9.0666 14.3333 8.93326 13.6 8.8666C15.4667 6.6666 15.1333 3.33326 12.9333 1.4666C10.7333 -0.40007 7.4 -0.0667372 5.53333 2.13326C3.66666 4.33326 4 7.6666 6.2 9.53326C6.6 9.8666 7 10.1333 7.4 10.2666V11.7333L6.33333 10.7333C5.4 9.79993 3.86666 9.79993 2.86666 10.7333C1.93333 11.6666 1.86666 13.1333 2.8 14.0666L5.86666 17.6666C6 18.5999 6.33333 19.4666 6.8 20.2666C7.13333 20.8666 7.6 21.4666 8.06666 21.9333V23.1999C8.06666 23.5999 8.33333 23.8666 8.73333 23.8666H17.8C18.1333 23.8666 18.4667 23.5333 18.4667 23.1999V21.4666C19.7333 19.9333 20.4 17.9999 20.4 16.0666V12.1999C20.4667 11.9333 20.4 11.7999 20.2667 11.7333ZM5.6 5.4666C5.6 3.2666 7.4 1.53326 9.6 1.59993C11.8 1.59993 13.5333 3.39993 13.4667 5.59993C13.4667 6.79993 12.9333 7.8666 12 8.59993V5.2666C11.966 4.68884 11.7122 4.146 11.2907 3.74934C10.8693 3.35268 10.3121 3.13226 9.73333 3.13326C8.53333 3.0666 7.46666 4.0666 7.46666 5.2666V8.73326C6.33333 8.0666 5.66666 6.79993 5.6 5.4666ZM19.1333 15.9999C19.2 17.7333 18.6 19.3999 17.4667 20.7333C17.3333 20.8666 17.2 20.9999 17.2 21.1999V22.5999H9.46666V21.6666C9.46666 21.4666 9.33333 21.2666 9.2 21.1333C8.73333 20.7333 8.33333 20.2666 8 19.6666C7.6 18.9999 7.33333 18.1999 7.2 17.3999C7.2 17.2666 7.13333 17.1333 7.06666 16.9999L3.86666 13.1999C3.66666 12.9999 3.53333 12.7333 3.53333 12.3999C3.53333 12.1333 3.66666 11.7999 3.86666 11.5999C4.33333 11.1999 5 11.1999 5.46666 11.5999L7.4 13.5333V15.5333L8.66666 14.8666V5.2666C8.73333 4.79993 9.13333 4.39993 9.66666 4.4666C10.1333 4.4666 10.6 4.79993 10.6 5.2666V12.9333L11.9333 13.1999V10.1333C12 10.0666 12.0667 10.0666 12.1333 9.99993C12.6 9.99993 13.0667 10.0666 13.5333 10.1333V13.5333L14.6 13.7333V10.2666L15.4 10.4666C15.7333 10.5333 16.0667 10.6666 16.4 10.7999V14.1333L17.4667 14.3333V11.2666C18.0667 11.5333 18.6 11.9333 19.0667 12.3999L19.1333 15.9999Z"
                fill="white"
              />
            </svg>
          </i>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.text}>{description}</p>
      </a>

      <div className={styles.links}>
        {linksWithoutHttps.length === 1 ? (
          <a target="_blank" rel="noreferrer" href={githubLinks[0]} className={styles.link}>
            {t('cardGithubLink')} - {linksWithoutHttps[0]}
          </a>
        ) : (
          <>
            {t('cardGithubLink')}:
            <a target="_blank" rel="noreferrer" href={githubLinks[0]} className={styles.link}>
              Frontend - {linksWithoutHttps[0]}
            </a>
            <a target="_blank" rel="noreferrer" href={githubLinks[1]} className={styles.link}>
              Backend - {linksWithoutHttps[1]}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
