import React from 'react';

import { PlatformType } from '../../types/Platforms';
import classes from './button-platform.module.css';
import { platforms } from './platforms.config';

export interface ButtonPlatformProps {
  platform: PlatformType;
  link: string;
  target?: string;
}

export const ButtonPlatform: React.FC<ButtonPlatformProps> = ({ link, platform, target = '_blank' }) => {
  const { color, svgIcon, alt } = platforms[platform];

  return (
    <a
      className={classes.ButtonPlatform + ' ' + classes[platform]}
      href={link}
      target={target}
      style={{
        backgroundColor: color,
      }}
    >
      {/* @ts-ignore */}
      <svgIcon alt={alt} width={72} height={72} />
    </a>
  );
};
