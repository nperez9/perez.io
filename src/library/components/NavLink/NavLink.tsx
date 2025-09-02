import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavLink.css';
import { ReactIcon } from '../../Icons';

export interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false }) => {
  const classname = active ? 'nav-link-active' : '';

  return (
    <Link className={'nav-link ' + classname} to={href}>
      <span className="nav-link-icon-container flex">
        <ReactIcon classname="nav-link-icon mr-2" />
        {children}
      </span>
    </Link>
  );
};
