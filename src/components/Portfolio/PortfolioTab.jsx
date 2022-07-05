/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Tab, Tabs } from 'react-bootstrap';

import { portfolioList } from '../../data';
import PortfolioList from './PortfolioList';

const style = {
  justifyContent: 'space-evenly',
  '.nav-item': {
    width: '50%',
    fontSize: '1.25em',
    '> button': {
      width: '100%',
      color: 'white',
    }
  }
}

const PortfolioTab = () => {
  const web = portfolioList.filter(p => p.type === 'web');
  const games = portfolioList.filter(p => p.type === 'videogame');

  return (
    <Tabs defaultActiveKey="web" id="uncontrolled-tab-example" css={style}>
      <Tab eventKey="web" title="Web">
        <PortfolioList portfolioList={web} />
      </Tab>
      <Tab eventKey="games" title="Games">
        <PortfolioList portfolioList={games} />
      </Tab>
    </Tabs>
  );
};

export default PortfolioTab;