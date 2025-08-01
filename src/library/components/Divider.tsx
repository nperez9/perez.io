import React from 'react';
import { container } from '../styles/grid';
import PropTypes from 'prop-types';

let style = {
  margin: '20px auto',
  backgroundColor: '#d6d6d6',
  height: '1px',
};

export interface DividerProps {
  color?: string;
  height?: number;
}

const Divider: React.FC<DividerProps> = ({ color = '#d6d6d6', height = 1 }) => {
  return <div style={style}></div>;
};

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};

export default Divider;
