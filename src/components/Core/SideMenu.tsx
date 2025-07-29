import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { menuData } from '../../data';
import { Icons } from '../../library';
import { ActiveMenu } from './AsideMenu/ActiveMenu';
import styles from './SideMenu.module.css';

export const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const clickIcon = (menuItem) => {
    if (menuItem.key === activeMenu?.key) {
      return setActiveMenu(null);
    }
    setActiveMenu(menuItem);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  // builds the icons menu
  const sideIconMenu = menuData.map((mi) => {
    const classname = activeMenu?.key === mi.key ? 'active' : '';
    return (
      <OverlayTrigger key={mi.key} placement="right" overlay={<Tooltip id={`tooltip-${mi.key}`}>{mi.tooltip ? mi.tooltip : mi.key}</Tooltip>}>
        <div onClick={() => clickIcon(mi)} className={classname}>
          <Icons icon={mi.key} />
        </div>
      </OverlayTrigger>
    );
  });

  return (
    <aside className={styles.sideMenu}>
      <section className={styles.sideIconMenu}>{sideIconMenu}</section>
      <ActiveMenu isActiveMenu={activeMenu} closeMenu={closeMenu} activeMenu={activeMenu} />
    </aside>
  );
};

export default SideMenu;
