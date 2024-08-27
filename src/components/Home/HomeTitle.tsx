import React from 'react';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../../library';
import classes from './HomeTitle.module.css';

export const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.HomeTitle}>
      <h1>
        <ShowCode tag="h1">{t('home.title')}</ShowCode>
      </h1>
      <h2>
        <ShowCode tag="h2">{t('home.subtitle')}</ShowCode>
      </h2>
      <h4>
        <ShowCode tag="h4">{t('home.posttitle')}</ShowCode>
      </h4>
    </section>
  );
};

export default HomeTitle;
