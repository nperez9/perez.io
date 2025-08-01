import React, { useEffect, useState } from 'react';
import { GitIcon } from '../../library/Icons';

import classes from './Footer.module.css';
import { calculateTotalPageHeight } from '../../library';
import { useLocation } from 'react-router-dom';

export const Footer: React.FC<any> = () => {
  const [mousePos, setMousePos] = useState({ x: 1, y: 1 });
  const [totalLines, setTotalLines] = useState(calculateTotalPageHeight());
  const location = useLocation();

  // TODO: implement useEffect
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

  useEffect(() => {
    setTotalLines(calculateTotalPageHeight());
  }, [location]);

  return (
    <footer className={classes.Footer}>
      <div>
        <span className={classes['left-side']}>
          <GitIcon height={14} width={14} className={classes.Icon} />
          <span>release v3.0.2</span>
        </span>
        <span className={classes['right-side']}>
          <span>
            Ln {mousePos.y}, Col {mousePos.x}
          </span>
          <span className={classes['total-lines']}>
            {totalLines} lines
          </span>
          <span>{"{}"} Typescript JSX</span>

          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
