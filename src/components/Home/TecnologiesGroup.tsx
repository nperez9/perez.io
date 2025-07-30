import React from 'react';
import { ShowCode } from '../../library';
import { publicResource } from '../../utils';
import styles from './TecnologiesGroup.module.css';

const TecnologiesGroup: React.FC<{ tecGroup: any }> = ({ tecGroup }) => {
  return (
    <div className={styles.tecGroup}>
      <h5 className={styles.tecGroupTitle}>
        <ShowCode tag="td">{tecGroup.groupName}:</ShowCode>
      </h5>
      <div className={styles.tecsContainer}>
        {tecGroup.tecs.map((t: any) => {
          return (
            <div className={styles.tecItem} key={t.name}>
              <img src={publicResource(`/images/techlogos/${t.logo}`)} alt={t.name} />
              <span>{t.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TecnologiesGroup;
