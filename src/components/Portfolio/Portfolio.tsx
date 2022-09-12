import React, { FC } from 'react';
import { htmlSites } from '../../data/htmlSites';
import Card from '../Card/Card';
import styles from './Portfolio.module.css';

const Portfolio: FC = () => {
  return (
    <div className={styles.grid}>
      {htmlSites.map((site) => {
        return (
          <Card
            key={site.title}
            title={site.title}
            description={site.description}
            href={site.description}
            imgSrc={site.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
