import React from 'react';

import { PortfolioList } from '../../../data';
import { ShowCode } from '../../../library';
import styles from './DetailBody.module.scss';

export const DetailBody: React.FC<PortfolioList> = ({ name, cover_image, description }) => {
  return (
    <div className={styles.DetailBody}>
      <h1>
        <ShowCode tag="h1">{name}</ShowCode>
      </h1>
      <img src={cover_image} alt={name} className="cover-images" />
      <p>
        <ShowCode tag="p">{description}</ShowCode>
      </p>
    </div>
  );
};
