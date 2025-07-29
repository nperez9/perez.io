import React from 'react';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../../../library';
import { images } from './AboutTextBlox.config';
import styles from './AboutTextBlock.module.css';
import { publicResource } from '../../../utils';

export type TextKey = 'history';

export interface AboutTextBlockProps {
  textKey: TextKey;
  numOfTextBlocks: number;
  imageArray?: number[];
}

export const AboutTextBlock: React.FC<AboutTextBlockProps> = ({ textKey, numOfTextBlocks }) => {
  const { t } = useTranslation();

  let renderBlocks = [];
  for (let i = 1; i <= numOfTextBlocks; i++) {
    const imageIndex = i - 1;

    renderBlocks.push(
      <div className={styles.TextBlock}>
        <p key={i}>
          <ShowCode tag="p">{t(`about.${textKey}${i}`)}</ShowCode>
        </p>
        {typeof images[textKey][imageIndex] === 'string' && (
          <img
            src={publicResource(`/images/about/${textKey}/${images[textKey][imageIndex] as string}`)}
            alt={textKey}
          />
        )}
      </div>,
    );
  }

  return (
    <section className={styles.AboutTextBlock}>
      <h3>
        <ShowCode tag="h3">{t(`about.${textKey}`)}</ShowCode>
      </h3>
      <div>{renderBlocks}</div>
    </section>
  );
};
