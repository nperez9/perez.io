/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { portfolioList } from '../../data';
import PortfolioTab from './PortfolioTab';

const style = {
  justifyContent: 'space-evenly',
  '.nav-item': {
    width: '50%',
    fontSize: '1.25em',
    '> button': {
      width: '100%',
      color: 'white',
    },
  },
};

export interface PortfolioTabsProps {}

export const PortfolioTabs: React.FC<PortfolioTabsProps> = () => {
  const web = portfolioList.filter((p) => p.type === 'web');
  const games = portfolioList.filter((p) => p.type === 'videogame');

  return (
    <Tabs defaultActiveKey="games" id="uncontrolled-tab-example" css={style}>
      <Tab eventKey="games" title="Games">
        <PortfolioTab portfolioList={games} />
      </Tab>
      <Tab eventKey="web" title="Web">
        <PortfolioTab portfolioList={web} />
      </Tab>
    </Tabs>
  );
};

export default PortfolioTabs;
