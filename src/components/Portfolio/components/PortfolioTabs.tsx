import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { portfolioList } from '../../../data';
import PortfolioTab from './PortfolioTab';
import './PortfolioTabs.css';
import { ShowCode } from '../../../library';

export interface PortfolioTabsProps {}

export const PortfolioTabs: React.FC<PortfolioTabsProps> = () => {
  const web = portfolioList.filter((p) => p.type === 'web').sort((a, b) => a.sortNumber - b.sortNumber);
  const games = portfolioList.filter((p) => p.type === 'videogame').sort((a, b) => a.sortNumber - b.sortNumber);

  return (
    <div className="portfolio-tabs">
      <section className="mb-4 flex flex-col gap-3 items-center">
        <h2 className="text-2xl font-bold italic"><ShowCode tag='section' className='hidden md:inline' >Games</ShowCode></h2>
        <PortfolioTab portfolioList={games} />
      </section>
      <section className="mb-6 flex flex-col gap-3 items-center">
        <h2 className="text-2xl font-bold italic"><ShowCode tag='section' className='hidden md:inline' >Web Projects</ShowCode></h2>
        <PortfolioTab portfolioList={web} />
      </section>
    </div>
  );
};

export default PortfolioTabs;
