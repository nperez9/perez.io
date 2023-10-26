import React from 'react';
import { Link } from 'react-router-dom';

import { CustomAccordeon, CustomAccordeonItem } from '../../../library';
import { portfolioList } from '../../../data';

export const PortfolioMenu = ({ closeMenu }) => {
  const games = portfolioList
    .filter((pl) => pl.type === 'videogame')
    .map((pl) => (
      <Link to={`/portfolio/detail/${pl.id}`} key={pl.id}>
        <CustomAccordeonItem icon={pl.tech ? pl.tech : 'unity'} content={pl.name} />
      </Link>
    ));
  const web = portfolioList
    .filter((pl) => pl.type === 'web')
    .map((pl) => (
      <Link to={`/portfolio/detail/${pl.id}`} key={pl.id}>
        <CustomAccordeonItem icon={pl.tech ? pl.tech : 'javascript'} content={pl.name} />
      </Link>
    ));

  return (
    <CustomAccordeon title="NPEREZ.IO" isOpenDefault>
      <CustomAccordeon title="Games" isOpenDefault>
        {games}
      </CustomAccordeon>
      <CustomAccordeon title="Web" isOpenDefault>
        {web}
      </CustomAccordeon>
      <CustomAccordeon title="Pages" isOpenDefault>
        <Link to={`/home`} >  
          <CustomAccordeonItem icon="javascript" content={"Home"} />
        </Link>
        <Link to={`/portfolio`} >
          <CustomAccordeonItem icon="javascript" content={"Portfolio"} />
        </Link>
      </CustomAccordeon>
    </CustomAccordeon>
  );
};
