import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

import { MatrixRain, ShowCode } from '../../library';
import styles from './HomeTitle.module.css';
import { delay } from 'motion';

const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.homeTitle}>
      <MatrixRain />
      <div className={styles.homeHero}>
        <h1>
          <ShowCode tag="h1">
            <Typewriter
              options={{ delay: 80 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(t('home.title'))
                  .start()
                  .callFunction(() => {});
              }}
            />
          </ShowCode>
        </h1>
        <h2>
          <ShowCode tag="h2">
            <Typewriter
              options={{ delay: 70 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString(t('home.subtitle'))
                  .start()
              }}
            />
          </ShowCode>
        </h2>
        <h4>
          <ShowCode tag="h4">
            <Typewriter
              options={{ delay: 50 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3500)
                  .typeString(t('home.posttitle'))
                  .start()
              }}
            />
          </ShowCode>
        </h4>
        
      </div>
    </section>
  );
};

export default HomeTitle;
