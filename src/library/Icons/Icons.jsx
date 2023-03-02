import React from 'react';
import PropTypes from 'prop-types';
import { iconsDB } from './iconsDB';

export const Icons = ({ classname = '', icon, width = 0, heigth = 0 }) => {
  return (<span className={classname}>{iconsDB[icon]}</span>);
};

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  classname: PropTypes.string,
  width: PropTypes.number
};