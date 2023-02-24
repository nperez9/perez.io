/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import LenguagePicker from './LenguagePicker';
import { container } from '../../library';

const style = {
  ...container,
  height: '100%',
  marginBottom: 20,
  padding: 0,
  display: 'flow-root',
  '> div': {
    marginTop:'10px',
  },
  'a': {
    ':hover': {
      textDecoration: 'underline',
    },
    padding: '10px',
    marginRight: 25,
    color: '#d6d6d6',
    fontSize: '1.2em',
  },
  LenguagePicker: {
    float: 'right',
    fontSize: '1.2em',
  },
  '@media (max-width: 1200px)': {
    paddingLeft: '10px',
  }
};

const Header = () => {
  return (
    <nav css={style}>
      <div>
        <Link to="/home">Home.jsx</Link>
        <Link to="/portfolio">Portfolio</Link>
        <LenguagePicker />
      </div>
    </nav>
  );
}

export default Header;