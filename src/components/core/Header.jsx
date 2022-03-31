/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import LenguagePicker from './LenguagePicker';

const style = {
  maxWidth: '1200px',
  display: 'block',
  margin: '0 auto',
  padding: '10px 0',
  textAling: 'center',
  marginBottom: 20,
  '> a': {
    marginRight: 25,
    color: '#d6d6d6',
  },
  LenguagePicker: {
    float: 'right',
  },
  '@media (max-width: 1200px)': {
    paddingLeft: '10px',
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