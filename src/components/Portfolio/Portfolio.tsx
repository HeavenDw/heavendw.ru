import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Dna } from 'react-loader-spinner';

import Card from '../Card/Card';
import styles from './Portfolio.module.scss';
import { useGetAppsQuery, useGetHtmlSitesQuery } from '../../redux/Api/portfolioApi';
import { CardItem } from '../../@types/cardTypes';

const Portfolio: FC = () => {
  const { t } = useTranslation();
  const language = Cookies.get('i18next') || 'En';
  const { data: htmlSites, error, isLoading, isFetching } = useGetHtmlSitesQuery(language);
  const { data: appsList } = useGetAppsQuery(language);

  if (isLoading || isFetching || error) {
    return (
      <div className={styles.loader}>
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <>
      <h1 className={styles.title}>{t('projects')}</h1>
      <h3 className={styles.subtitle}>{t('singlePageApp')}</h3>
      <div className={styles.grid}>
        {appsList?.map((app: CardItem) => {
          return (
            <Card
              key={app.title}
              title={app.title}
              description={app.description}
              siteLink={app.href}
              imgSrc={app.imgSrc}
              githubLink={app.githubLink}
            />
          );
        })}
      </div>
      <h3 className={styles.subtitle}>{t('HTMLsites')}</h3>
      <div className={styles.grid}>
        {htmlSites?.map((site: CardItem) => {
          return (
            <Card
              key={site.title}
              title={site.title}
              description={site.description}
              siteLink={site.href}
              imgSrc={site.imgSrc}
              githubLink={site.githubLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
