import React from 'react';

import { Icons, IconsDB } from '../../Icons';
import styles from './CustomAccordeonItem.module.css';
import { Tech } from '../../../types';

export interface CustomAccordeonItemProps {
  icon: IconsDB | Tech;
  content: string;
}

export const CustomAccordeonItem: React.FC<CustomAccordeonItemProps> = ({ icon, content }) => {
  return (
    <div className={styles['cai-container']}>
      <Icons icon={icon} className={styles['cai-container-icon']} />
      <span className={styles['cai-container-title']}>{content}</span>
    </div>
  );
};
