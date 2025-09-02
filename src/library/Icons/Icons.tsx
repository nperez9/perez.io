import React from 'react';

import { iconsDB } from './iconsDB';

export type IconsDB = keyof typeof iconsDB;

export interface IconsProps {
  icon?: string;
  className?: string;
  size?: string;
}

export const Icons: React.FC<IconsProps> = ({ icon = 'javascript', className = '', size = '16px' }) => {
  // Get the SVG component from iconsDB
  const svgComponent = iconsDB[icon as keyof typeof iconsDB];
  
  if (!svgComponent) {
    return <span className={className}></span>;
  }

  // Clone the SVG element and add/override the size props
  const clonedSvg = React.cloneElement(svgComponent as React.ReactElement, {
    width: size,
    height: size,
    className: className
  });

  return clonedSvg;
};
