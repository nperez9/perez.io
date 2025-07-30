import React from 'react';

import { Icons } from '../../../library';
import { PortfolioMenu } from './PortfolioMenu';
import { SettingsMenu } from './SettingsMenu';
import { SocialMenu } from './SocialMenu';

import styles from './ActiveMenu.module.css';

const overlay = {
  width: 'calc(100vw - 344px)',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  cursor: 'pointer',
};

export interface ActiveMenuProps {
  isActiveMenu: boolean;
  closeMenu: () => void;
  activeMenu: { key: string; title: string } | null;
}

// @ts-ignore
export const ActiveMenu: React.FC<ActiveMenuProps> = ({ isActiveMenu, closeMenu, activeMenu }) => {
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
        <section className={styles.activeMenu}>
          <div className={styles.title}>
            <span>{activeMenu?.title}</span>
            <span onClick={closeMenu}>
              <Icons icon="closeAll" className={styles.icon} />
            </span>
          </div>
          <div className={styles.menuContainer}>{getCurrentMenu()}</div>
        </section>
        <section style={overlay} onClick={closeMenu} />
      </React.Fragment>
    )
  );
};
