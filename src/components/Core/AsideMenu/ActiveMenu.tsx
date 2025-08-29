import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

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
    <AnimatePresence>
      {isActiveMenu && (
        <React.Fragment>
          <motion.section exit={{ x: -300 }} initial={{ x: -300 }} animate={{ x: 0 }} duration={0.2}  className={styles.activeMenu}>
            <div className={styles.title}>
              <span>{activeMenu?.title}</span>
              <span onClick={closeMenu}>
                <Icons icon="closeAll" className={styles.icon} />
              </span>
            </div>
            <div className={styles.menuContainer}>{getCurrentMenu()}</div>
          </motion.section>
          <motion.section exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} duration={0.2}  style={overlay} onClick={closeMenu}>
          </motion.section>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
