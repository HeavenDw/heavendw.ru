import React, { FC } from 'react';
import Card from '../Card/Card';
import styles from './App.module.css';
import { htmlSites } from '../../data/htmlSites';
import Header from '../Header/Header';

const App: FC = () => {
  return (
    <main>
      <div className={`${styles.app} _container`}>
        <Header />
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
      </div>
    </main>
  );
};

export default App;
