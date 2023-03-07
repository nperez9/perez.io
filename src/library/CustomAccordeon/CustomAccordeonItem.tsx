import React from 'react';

import { Icons, IconsDB } from '../Icons';
import './CustomAccordeonItem.css';

export interface CustomAccordeonItemProps {
  icon: IconsDB;
  content: string;
}

export const CustomAccordeonItem: React.FC<CustomAccordeonItemProps> = ({ icon, content }) => {
  return (
    <div className="cai-container">
      <Icons icon={icon} classname="cai-container-icon" />
      <span className="cai-container-title">{content}</span>
    </div>
  );
};
