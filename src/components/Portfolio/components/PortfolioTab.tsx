import React from 'react';
import { PortfolioItem } from '../../../types';
import PortfolioCard from './PortfolioCard';
import styles from './PortfolioTab.module.css';


export interface PortfolioTabProps {
  portfolioList: PortfolioItem[];
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ portfolioList }) => {
  const itemList = portfolioList.map((item) => {
    return <PortfolioCard item={item} key={item.id} />;
  });

  return <div className={styles.PortfolioTab}>{itemList}</div>;
};

export default PortfolioTab;
