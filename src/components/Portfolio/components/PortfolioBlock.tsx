import React from 'react';
import { Link } from 'react-router-dom';

import { PortfolioItem } from '../../../types';
import { Icons } from '../../../library';

export interface PortfolioItemProps {
  item: PortfolioItem;
}

export const PortfolioBlock: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <Link to={`/portfolio/detail/${item.id}`}>
      <article
        className="relative flex h-64 w-64 flex-col justify-end overflow-hidden rounded-xl transition-all duration-200 hover:scale-105 hover:!shadow-none hover:brightness-110"
        style={{
          backgroundImage: `url(${item.cover_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 30px 8px rgba(0, 0, 0, 0.3), inset 0 0 60px 15px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="absolute top-2 left-2"> 
          <Icons icon={item.tech ? item.tech : 'javascript'}/> 
        </div>
        <header className="flex w-full items-center justify-start bg-black bg-opacity-50 p-2">
          <h3 className="text-xl text-white italic">{item.name}</h3>
        </header>
      </article>
    </Link>
  );
};
