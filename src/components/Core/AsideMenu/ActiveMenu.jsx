/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Icons, colors } from '../../../library';

const style = {
  width: '300px',
  backgroundColor: 'black',
  fontFamily: 'sans-serif',
  borderRight: `1px solid ${colors.uiBorder}`,
  '.title': {
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    '.icon': {
      cursor: 'pointer',
    },
    '.icon > svg': {
      height: 20,
      width: 20,
    },
  },
  '.menu-container': {
    
  }
};

const overlay = {
  width: 'calc(100vw - 344px)',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  cursor: 'pointer',
};

export const ActiveMenu = ({ isActiveMenu, closeMenu }) => {
  return (
    isActiveMenu && (
      <React.Fragment>
        <section css={style}>
          <div className="title">
            <span>Mock Title</span>
            <span onClick={closeMenu}>              
              <Icons icon="closeAll" classname="icon" />
            </span>
          </div>
          <div>here should go the components</div>
        </section>
        <section css={overlay} onClick={closeMenu} />
      </React.Fragment>
    )
  );
};
