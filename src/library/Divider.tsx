import React from 'react';
import { container } from './styles/grid';
import PropTypes from 'prop-types';

const style = {
  ...container,
  padding: '0px !important',
  margin: '20px auto',
  backgroundColor: '#d6d6d6',
  height: 1,
};

export interface DividerProps {
  color?: string;
  height?: number;
}

const Divider: React.FC<DividerProps> = ({ color = '#d6d6d6', height = 1 }) => {
  style.backgroundColor = color;
  style.height = height;

  return <div style={style}></div>;
};

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};

export default Divider;
