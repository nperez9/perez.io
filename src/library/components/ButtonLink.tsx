import React from 'react';
import { Link } from 'react-router-dom';

import ShowCode from './ShowCode';

export interface ButtonLinkProps {
  link: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ link, children, isExternal, className = '' }) => {
  const combinedClassName = `btn btn-outline-light ${className}`.trim();
  
  const external = (
    <a className={combinedClassName} href={link} target="_blank" rel="noopener noreferrer">
      <ShowCode tag={'a'}>{children}</ShowCode>
    </a>
  );
  const internal = (
    <Link to={link} className={combinedClassName} target="_blank" rel="noopener noreferrer">
      <ShowCode tag={'a'}>{children}</ShowCode>
    </Link>
  );

  return isExternal ? external : internal;
};

ButtonLink.defaultProps = {
  isExternal: true,
};

export default ButtonLink;
