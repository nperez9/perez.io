import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { portfolioList } from '../../../data';
import PortfolioTab from './PortfolioTab';
import './PortfolioTabs.css';

export interface PortfolioTabsProps {}

export const PortfolioTabs: React.FC<PortfolioTabsProps> = () => {
  const web = portfolioList.filter((p) => p.type === 'web').sort((a, b) => a.sortNumber - b.sortNumber);
  const games = portfolioList.filter((p) => p.type === 'videogame').sort((a, b) => a.sortNumber - b.sortNumber);

  return (
    <div className="portfolio-tabs">
      <section className="mb-4 flex flex-col gap-3">
        <h2 className="text-2xl font-bold italic">Games</h2>
        <PortfolioTab portfolioList={games} />
      </section>
      <section className="mb-6 flex flex-col gap-3">
        <h2 className="text-2xl font-bold italic">Web Projects</h2>
        <PortfolioTab portfolioList={web} />
      </section>
    </div>
  );
};

export default PortfolioTabs;
