import React from 'react';
import { iconsDB } from './iconsDB';

export const Icons = ({ classname = '', icon}) => {
  return (<span className={classname}>{iconsDB[icon]}</span>);
};