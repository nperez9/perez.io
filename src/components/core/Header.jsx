/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link, BrowserRouter } from 'react-router-dom';

import { container } from '../../library';

const style = {
  ...container,
  padding: '10px 0',
  textAling: 'center',
  '> a': {
    marginRight: 25,
  }
};

const Header = () => {
  return (
    <nav css={style}>
      <BrowserRouter>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </BrowserRouter>
    </nav>
  );
}

export default Header;