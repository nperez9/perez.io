import React from 'react';

import { iconsDB } from './iconsDB';

export type IconsDB = keyof typeof iconsDB;

export interface IconsProps {
  icon?: string;
  className?: string;
  size?: string;
}

export const Icons: React.FC<IconsProps> = ({ icon = 'javascript', className = '', size = '16px' }) => {
  const component = iconsDB[icon] || <></>;
  { /* @ts-ignore */ }
  return <span className={className} style={{ fontSize: size }}>{component} </span>;
};
