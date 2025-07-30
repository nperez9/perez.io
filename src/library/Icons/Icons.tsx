/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { iconsDB } from './iconsDB';

export type IconsDB = keyof typeof iconsDB;

export interface IconsProps {
  icon?: string;
  className?: string;
}

export const Icons: React.FC<IconsProps> = ({ icon = 'javascript', className = '' }) => {
  { /* @ts-ignore */ }
  return <span className={className}>{iconsDB[icon]}</span>;
};
