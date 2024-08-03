import React, { useEffect, useState } from 'react';
import { Icons } from '../../library/Icons';

import classes from './Footer.module.scss';

export const Footer: React.FC<any> = () => {
  const [mousePos, setMousePos] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const x = Math.round((event.clientX > 45 ? event.clientX : 0) / 32);
      const y = Math.round((event.clientY > 28 ? event.clientY : 0) / 32);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer className={classes.Footer}>
      <div>
        <span className={classes['left-side']}>
          <Icons icon="git" classname={classes['icon']} />
          <span>release v3.0.2</span>
        </span>
        <span className={classes['right-side']}>
          <span>
            Ln {mousePos.y}, Col {mousePos.x}
          </span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
