import React from 'react';

import { PortfolioItem } from '../../../types';

import PortfolioCard from './PortfolioCard';

const style = {
  marginTop: '25px',
  display: 'flex',
  'flex-wrap': 'wrap',
  alignContent: 'space-between',
  justifyContent: 'space-around',
};

export interface PortfolioTabProps {
  portfolioList: PortfolioItem[];
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ portfolioList }) => {
  const itemList = portfolioList.map((item) => {
    return <PortfolioCard item={item} key={item.id} />;
  });

  return <div style={style}>{itemList}</div>;
};

export default PortfolioTab;
