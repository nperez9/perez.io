import React from 'react';

import { Icons, colors, fonts } from '../../../library';
import { PortfolioMenu } from './PortfolioMenu';
import { SettingsMenu } from './SettingsMenu';
import { SocialMenu } from './SocialMenu';

import './ActiveMenu.css';

const style = {
  width: '300px',
  backgroundColor: 'black',
  fontFamily: fonts.uiFont,
  borderRight: `1px solid ${colors.uiBorder}`,
  '.title': {
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    fontSize: 18,
    borderBottom: `1px solid ${colors.uiBorder}`,
    '.icon': {
      cursor: 'pointer',
    },
    '.icon > svg': {
      height: 20,
      width: 20,
    },
  },
  '.menu-container': {
    padding: 15,
  },
};

const overlay = {
  width: 'calc(100vw - 344px)',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  cursor: 'pointer',
};

export const ActiveMenu = ({ isActiveMenu, closeMenu, activeMenu }) => {
  const getCurrentMenu = () => {
    if (!activeMenu) {
      return null;
    }

    switch (activeMenu?.key) {
      case 'files':
        return <PortfolioMenu closeMenu={closeMenu} />;
      case 'search':
        return <SocialMenu />;
      case 'settings':
        return <SettingsMenu />;
      default:
        return null;
    }
  };

  return (
    isActiveMenu && (
      <React.Fragment>
        <section css={style}>
          <div className="title">
            <span>{activeMenu?.title}</span>
            <span onClick={closeMenu}>
              <Icons icon="closeAll" classname="icon" />
            </span>
          </div>
          <div className="menu-container">{getCurrentMenu()}</div>
        </section>
        <section style={overlay} onClick={closeMenu} />
      </React.Fragment>
    )
  );
};
