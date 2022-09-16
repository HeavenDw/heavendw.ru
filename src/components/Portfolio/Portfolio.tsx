import React, { FC } from 'react';
import { htmlSites } from '../../data/htmlSites';
import { appsList } from '../../data/apps';
import Card from '../Card/Card';
import styles from './Portfolio.module.css';

const Portfolio: FC = () => {
  return (
    <>
      <h3 className={styles.title}>Одностраничные приложения</h3>
      <div className={styles.grid}>
        {appsList.map((site) => {
          return (
            <Card
              key={site.title}
              title={site.title}
              description={site.description}
              href={site.href}
              imgSrc={site.imgSrc}
            />
          );
        })}
      </div>
      <h3 className={styles.title}>HTML сайты</h3>
      <div className={styles.grid}>
        {htmlSites.map((site) => {
          return (
            <Card
              key={site.title}
              title={site.title}
              description={site.description}
              href={site.href}
              imgSrc={site.imgSrc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
