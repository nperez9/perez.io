/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import { container } from '../../library';

import LenguagePicker from './LenguagePicker';

const style = {
  ...container,
  padding: '10px 0',
  textAling: 'center',
  marginBottom: 30,
  '> a': {
    marginRight: 25,
    color: '#d6d6d6',
  },
  LenguagePicker: {
    float: 'right',
  }
};

const Header = () => {
  return (
    <nav css={style}>
      <Link to="/home">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <LenguagePicker />
    </nav>
  );
}

export default Header;