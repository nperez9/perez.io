/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { PortfolioList } from '../../data';
import { Divider } from '../../library';

import PortfolioItem from './PortfolioItem';

const style = {
  marginTop: '25px',
};

export interface PortfolioTabProps {
  portfolioList: PortfolioList[];
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ portfolioList }) => {
  const itemList = portfolioList.map((item) => {
    return (
      <article key={item.id}>
        <PortfolioItem item={item} />
        <Divider />
      </article>
    );
  });

  return <div style={style}>{itemList}</div>;
};

export default PortfolioTab;
