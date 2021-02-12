/** @jsx jsx */
import { jsx } from '@emotion/core';
import { container } from './grid';
import PropTypes from 'prop-types';

const style = {
  ...container,
  padding: '0px !important',
  margin: '20px auto',
};

const Divider = ({ color, height }) => {
  style.backgroundColor = color;
  style.height = height;
  
  return <div css={style}></div>;
}

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};

Divider.defaultProps = {
  color: '#111',
  height: 3,
};

export default Divider;