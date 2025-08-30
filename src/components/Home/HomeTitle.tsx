import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

import { MatrixRain, ShowCode } from '../../library';
import styles from './HomeTitle.module.css';
import { delay } from 'motion';

const HomeTitle = () => {
  const { t } = useTranslation();

  const hideFunc = (state: any): void => {
    state.elements.cursor.style.display = 'none';
  };

  const showFunc = (state: any): void => {
    state.elements.cursor.style.display = 'inline-block';
  };

  return (
    <>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <MatrixRain />
      </div>
      <section className={styles.homeTitle}>
        <div className={styles.homeHero} style={{ zIndex: 3 }}>
          <h1>
            <ShowCode tag="h1">
              <Typewriter
                options={{ delay: 70 }}
                onInit={(typewriter) => {
                  typewriter.typeString(t('home.title')).start().callFunction(hideFunc);
                }}
              />
            </ShowCode>
          </h1>
          <h2>
            <ShowCode tag="h2">
              <Typewriter
                options={{ delay: 60 }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(hideFunc)
                    .pauseFor(1500)
                    .callFunction(showFunc)
                    .typeString(t('home.subtitle'))
                    .start()
                    .callFunction(hideFunc);
                }}
              />
            </ShowCode>
          </h2>
          <h4>
            <ShowCode tag="h4">
              <Typewriter
                options={{ delay: 30 }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(hideFunc)
                    .pauseFor(3500)
                    .callFunction(showFunc)
                    .typeString(t('home.posttitle'))
                    .start()
                    .callFunction(hideFunc);
                }}
              />
            </ShowCode>
          </h4>
        </div>
      </section>
    </>
  );
};

export default HomeTitle;
