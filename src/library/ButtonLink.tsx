import React from 'react';
//@ts-ignore
import { Link } from 'react-router-dom';

import ShowCode from './ShowCode';

export interface ButtonLinkProps {
  link?: string;
  isExternal?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ link, children, isExternal }) => {
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

ButtonLink.defaultProps = {
  isExternal: true,
};

export default ButtonLink;
