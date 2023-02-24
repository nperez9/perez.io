/** @jsx jsx */
import { jsx } from '@emotion/core';

import LenguagePicker from './LenguagePicker';
import { colors, container, NavLink } from '../../library';

const style = {
  ...container,
  height: '100%',
  marginBottom: 20,
  padding: 0,
  backgroundColor: colors.uiBg,
  display: 'flow-root',
  '> div': {
    marginTop:'10px',
    marginBottom: 5,
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
        <NavLink href="/home" active>Home.jsx</NavLink>
        <NavLink href="/portfolio">Portfolio.jsx</NavLink>
        <LenguagePicker />
      </div>
    </nav>
  );
}

export default Header;