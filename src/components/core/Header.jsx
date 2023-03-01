/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useLocation } from 'react-router-dom';

import LenguagePicker from './LenguagePicker';
import { colors, NavLink } from '../../library';

const style = {
  height: '100%',
  marginBottom: 20,
  marginLeft: 44,
  padding: 0,
  backgroundColor: colors.uiBg,
  display: 'flow-root',
  borderBottom: `1px solid ${colors.uiBorder}`,
  '> div': {
    marginTop: '10px',
    marginBottom: 5,
  },
  LenguagePicker: {
    float: 'right',
    fontSize: '1.2em',
  },
  '@media (max-width: 1200px)': {
    paddingLeft: '10px',
  },
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav css={style}>
      <div>
        <NavLink href="/home" active={pathname === '/home'}>
          Home.jsx
        </NavLink>
        <NavLink href="/portfolio" active={pathname === '/portfolio'}>
          Portfolio.jsx
        </NavLink>
        {/* <NavLink href="/about" active={pathname === '/about'}>
          About.jsx
        </NavLink>    */}
        <LenguagePicker />
      </div>
    </nav>
  );
};

export default Header;
