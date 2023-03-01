import React from 'react';
import PropTypes from 'prop-types';
import { iconsDB } from './iconsDB';

export const Icons = ({ classname = '', icon }) => {
  return (<span className={classname}>{iconsDB[icon]}</span>);
};

Icons.propTypes = {
  classname: PropTypes.string,
  icon: PropTypes.string,
};