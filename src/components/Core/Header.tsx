import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink } from '../../library';
import classes from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.Header}>
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
