import React from 'react';

import { Icons, IconsDB } from '../../Icons';
import './CustomAccordeonItem.css';
import { Tech } from '../../../types';

export interface CustomAccordeonItemProps {
  icon: IconsDB | Tech;
  content: string;
}

export const CustomAccordeonItem: React.FC<CustomAccordeonItemProps> = ({ icon, content }) => {
  return (
    <div className="cai-container">
      <Icons icon={icon} className="cai-container-icon" />
      <span className="cai-container-title">{content}</span>
    </div>
  );
};
