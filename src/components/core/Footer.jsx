/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import { Icons } from '../../library/Icons';
import { colors, fonts } from '../../library/styles';

const style = {
  bottom: 0,
  width: '100%',
  float: 'left',
  position: 'fixed',
  marginTop: 40,
  backgroundColor: colors.uiFooterBg,
  color: colors.uiFooterColor,
  borderTop: `1px solid ${colors.uiBorder}`,
  fontSize: '0.8rem',
  padding: '4px',
  fontFamily: fonts.uiFont,
  zIndex: 101,
  '.left-side': {
    marginLeft: '6px',
    float: 'left',
    '> span': {
      marginLeft: '6px',
    },
    '.icon > svg': {
      height: 16,
      width: 16,
    },
  },
  '.right-side': {
    float: 'right',
    display: 'inline-block',
    '> span': {
      marginRight: '15px',
    },
  },
};

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const handleMouseMove = (event) => {
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
    <footer css={style}>
      <div>
        <span className="left-side">
          <Icons icon="git" classname="icon" />
          <span>release v3.0.2</span>
        </span>
        <span className="right-side">
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
