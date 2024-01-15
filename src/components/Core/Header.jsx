/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useLocation } from 'react-router-dom';

import { colors, fonts, NavLink } from '../../library';

const style = {
  height: '100%',
  marginBottom: 20,
  marginLeft: 44,
  padding: 0,
  backgroundColor: colors.uiBg,
  display: 'flow-root',
  borderBottom: `1px solid ${colors.uiBorder}`,
  fontFamily: fonts.uiFont,
  '> div': {
    marginTop: '10px',
    marginBottom: 5,
  },
  LenguagePicker: {
    float: 'right',
    fontSize: '1.2em',
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
        <NavLink href="/about" active={pathname === '/about'}>
          About.jsx
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
