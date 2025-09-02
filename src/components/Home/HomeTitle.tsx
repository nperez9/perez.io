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
      <div className="z-2 relative">
        <MatrixRain />
      </div>
      <section className={styles.homeTitle}>
        <div className={styles.homeHero + ' z-10'}>
          <h1 className="text-[38px] flex flex-col gap-1">
            <ShowCode tag="h1" className=''>
                <Typewriter
                  options={{ delay: 60 }}
                  onInit={(typewriter) => {
                    typewriter.typeString(t('home.title')).start().callFunction(hideFunc);
                  }}
                />
            </ShowCode>
          </h1>
          <h2 className="text-[30px] flex flex-col gap-1">
            <ShowCode tag="h2">
              <Typewriter
                options={{ delay: 50 }}
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
          <h4 className='mt-[40px] text-2xl'>
            <Typewriter
              options={{ delay: 30 }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction(hideFunc)
                  .pauseFor(3600)
                  .callFunction(showFunc)
                  .typeString(t('home.posttitle'))
                  .start();
              }}
            />
          </h4>
        </div>
      </section>
    </>
  );
};

/**
 *
 */

export default HomeTitle;
