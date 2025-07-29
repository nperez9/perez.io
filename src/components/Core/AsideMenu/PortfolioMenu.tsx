import React from 'react';
import { Link } from 'react-router-dom';

import { CustomAccordeon, CustomAccordeonItem } from '../../../library';
import { portfolioList } from '../../../data';
import { PortfolioItem } from '../../../types';

export interface PortfolioMenuProps {
  closeMenu: () => void;
}

export const PortfolioMenu: React.FC<PortfolioMenuProps> = ({ closeMenu }) => {
  const games = portfolioList
    .filter((pl) => pl.type === 'videogame')
    .sort((a, b) => a.sortNumber - b.sortNumber)
    .map((pl: PortfolioItem) => (
      <Link to={`/portfolio/detail/${pl.id}`} key={pl.id}>
        <CustomAccordeonItem icon={pl.tech ? pl.tech : 'unity'} content={pl.name} />
      </Link>
    ));
  const web = portfolioList
    .filter((pl) => pl.type === 'web')
    .sort((a, b) => a.sortNumber - b.sortNumber)
    .map((pl) => (
      <Link to={`/portfolio/detail/${pl.id}`} key={pl.id}>
        <CustomAccordeonItem icon={pl.tech ? pl.tech : 'javascript'} content={pl.name} />
      </Link>
    ));

  return (
    <CustomAccordeon title="NPEREZ.IO" isOpenDefault>
      <CustomAccordeon title="Games">
        {games}
      </CustomAccordeon>
      <CustomAccordeon title="Web">
        {web}
      </CustomAccordeon>
      <CustomAccordeon title="Pages">
        <Link to={`/home`} >  
          <CustomAccordeonItem icon="javascript" content={"Home"} />
        </Link>
        <Link to={`/portfolio`} >
          <CustomAccordeonItem icon="javascript" content={"Portfolio"} />
        </Link>
        <Link to={`/about`} >  
          <CustomAccordeonItem icon="javascript" content={"About"} />
        </Link>
      </CustomAccordeon>
    </CustomAccordeon>
  );
};
