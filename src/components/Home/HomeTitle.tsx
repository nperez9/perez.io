import React from 'react';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../../library';
import styles from './HomeTitle.module.css';

const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <section id='title' className={styles.homeTitle}>
      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="content">
        <h2>Wavy Animation</h2>
      </div>
    </section>
  );
};

export default HomeTitle;
