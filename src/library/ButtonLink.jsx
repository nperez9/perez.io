import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ShowCode from './ShowCode';

export const ButtonLink = ({ link, children, isExternal }) => {
  const external = (
    <a className="btn btn-outline-light" href={link} target="_blank" rel="noopener noreferrer">
      <ShowCode tag={'a'}>{children}</ShowCode>
    </a>
  );
  const internal = (
    <Link to={link} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
      <ShowCode tag={'a'}>{children}</ShowCode>
    </Link>
  );

  return isExternal ? external : internal;
};

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

ButtonLink.defaultProps = {
  isExternal: true,
};

export default ButtonLink;
