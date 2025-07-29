/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { iconsDB } from './iconsDB';

export type IconsDB = keyof typeof iconsDB;

export interface IconsProps {
  icon?: string;
  classname?: string;
}

export const Icons: React.FC<IconsProps> = ({ icon = 'javascript', classname = '' }) => {
  { /* @ts-ignore */ }
  return <span className={classname}>{iconsDB[icon]}</span>;
};
