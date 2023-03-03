import React from 'react';
import { Icons } from '../Icons';

export interface CustomAccordeonItemProps {
  link: string;
  icon: string;
  content: string;
}

export const CustomAccordeonItem: React.FC<CustomAccordeonItemProps> = ({ link, icon, content }) => {
  return (
    <div>
      <Icons icon={icon} />
      <span>{content}</span>
    </div>
  );
};
