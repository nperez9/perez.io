import React from 'react';

import { CustomAccordeon, CustomAccordeonItem } from '../../../library';
import { portfolioList } from '../../../data';

export const PortfolioMenu = ({ closeMenu }) => {
  const games = portfolioList
    .filter((pl) => pl.type === 'videogame')
    .map((pl) => (
      <a href={`/#/portfolio/detail/${pl.id}`} target="_blank" rel="noopener noreferrer" key={pl.id}>
        <CustomAccordeonItem icon="unity" content={pl.name} />
      </a>
    ));
  const web = portfolioList
    .filter((pl) => pl.type === 'web')
    .map((pl) => (
      <a href={`/#/portfolio/detail/${pl.id}`} target="_blank" rel="noopener noreferrer" key={pl.id}>
        <CustomAccordeonItem icon="javascript" content={pl.name} />
      </a>
    ));

  return (
    <CustomAccordeon title="NPEREZ.IO" isOpenDefault>
      <CustomAccordeon title="Games" isOpenDefault>
        {games}
      </CustomAccordeon>
      <CustomAccordeon title="Web" isOpenDefault>
        {web}
      </CustomAccordeon>
    </CustomAccordeon>
  );
};
