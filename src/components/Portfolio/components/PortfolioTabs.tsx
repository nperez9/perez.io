import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { portfolioList } from '../../../data';
import PortfolioTab from './PortfolioTab';
import 'PortfolioTabs.css';

export interface PortfolioTabsProps {}

export const PortfolioTabs: React.FC<PortfolioTabsProps> = () => {
  const web = portfolioList.filter((p) => p.type === 'web').sort((a, b) => a.sortNumber - b.sortNumber);
  const games = portfolioList.filter((p) => p.type === 'videogame').sort((a, b) => a.sortNumber - b.sortNumber);

  return (
    <Tabs className="portfolio-tab" defaultActiveKey="games" id="uncontrolled-tab-example">
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
