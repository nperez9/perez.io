/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { colors, Icons } from '../../library';
import { ActiveMenu } from './AsideMenu/ActiveMenu'

const style = {
  position: 'fixed',
  display: 'flex',
  flexFlow: 'row',
  zIndex: 1,
  '.side-icon-menu': {
    minWidth: '44px',
    borderRight: `1px solid ${colors.uiBorder}`,
    backgroundColor: colors.uiBg,
    textAlign: 'center',
    height: '100vh',
    fontSize: '1.2em',
    '> div': {
      padding: '14px 5px',
      cursor: 'pointer',
    },
    '> div:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    '.active': {
      borderLeft: `2px solid ${colors.uiHeaderNavActive}`,
    },
  },
};

const menuItems = [{ key: 'files' }, { key: 'search' }, { key: 'git' }, { key: 'debug' }, { key: 'extensions' }];

const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const clickIcon = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  // builds the icons menu
  const sideIconMenu = menuItems.map((mi) => {
    const classname = activeMenu?.key === mi.key ? 'active' : '';
    return (
      <OverlayTrigger key={mi.key} placement="right" overlay={<Tooltip id={`tooltip-${mi.key}`}>{mi.key}</Tooltip>}>
        <div onClick={() => clickIcon(mi)} className={classname}>
          <Icons icon={mi.key} />
        </div>
      </OverlayTrigger>
    );
  });

  return (
    <aside css={style}>
      <section className="side-icon-menu">{sideIconMenu}</section>
      <ActiveMenu isActiveMenu={activeMenu}  closeMenu={closeMenu} />
    </aside>
  );
};

export default SideMenu;
