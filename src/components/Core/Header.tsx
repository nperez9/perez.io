import React from 'react';
import { useLocation } from 'react-router-dom';

import { colors, fonts, NavLink } from '../../library';
import styles from './Header.module.css';

const Header = () => {
  return null;
  
  const { pathname } = useLocation();

  return (
    <nav className={styles.header}>
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
