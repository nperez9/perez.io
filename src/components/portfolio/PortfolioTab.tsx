/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { PortfolioItem } from '../../types';
import { Divider } from '../../library';

import { PortfolioItemComponent } from './PortfolioItem';

const style = {
  marginTop: '25px',
};

export interface PortfolioTabProps {
  portfolioList: PortfolioItem[];
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ portfolioList }) => {
  const itemList = portfolioList.map((item) => {
    return (
      <article key={item.id}>
        <PortfolioItemComponent item={item} />
        <Divider />
      </article>
    );
  });

  return <div style={style}>{itemList}</div>;
};

export default PortfolioTab;
