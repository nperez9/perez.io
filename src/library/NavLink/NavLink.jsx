import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavLink.css';
import { ReactIcon } from '../Icons';

export const NavLink = ({ href, children, active }) => {
  const classname = active ? 'nav-link-active' : '';

  return (
    <Link className={'nav-link ' + classname} to={href}>
      <span className="nav-link-icon-container">
        <ReactIcon classname="nav-link-icon" />
      </span>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  active: false,
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
