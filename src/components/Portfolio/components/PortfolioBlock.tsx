import React from 'react';
import { Link } from 'react-router-dom';

import { PortfolioItem } from '../../../types';
import { ButtonLink, Icons } from '../../../library';
import { GitBranch, GitBranchIcon, Github, Play } from 'lucide-react';

export interface PortfolioItemProps {
  item: PortfolioItem;
}

export const PortfolioBlock: React.FC<PortfolioItemProps> = ({ item }) => {
  const playURL = item.external_play_url || item.itch_url || item.website_url;

  const handlePlayLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(playURL, '_blank');
  };

  const handleGitHubLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(item.github_url, '_blank');
  };
 
  return (
    <Link to={`/portfolio/detail/${item.id}`}>
      <article
        className="z-1 relative flex h-64 w-64 flex-col justify-end overflow-hidden rounded-xl transition-all duration-200 hover:scale-105 hover:!shadow-none hover:brightness-110"
        style={{
          backgroundImage: `url(${item.cover_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 30px 8px rgba(0, 0, 0, 0.3), inset 0 0 60px 15px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="absolute left-2 top-2">
          <Icons icon={item.tech ? item.tech : 'javascript'} />
        </div>
        <div className="absolute right-2 top-2 flex gap-2">
          {playURL && (
            <a
              className="h-9 w-9 rounded-full bg-opacity-75 bg-gray-800 flex items-center justify-center transition-all hover:bg-gray-700 hover:scale-125 text-white"
              onClick={handlePlayLink}
            >
              <Play width={18} height={18} />
            </a>
          )}
          {item.github_url && (
            <a
              className="h-9 w-9 rounded-full bg-opacity-75 bg-slate-800 flex items-center justify-center transition-all hover:bg-slate-700 hover:scale-125 text-white"
              onClick={handleGitHubLink}
            >
              <GitBranchIcon width={18} height={18} />
            </a>
          )}
        </div>
        <header className="flex w-full items-center justify-start bg-black bg-opacity-50 p-2">
          <h3 className="text-xl italic text-white">{item.name}</h3>
        </header>
      </article>
    </Link>
  );
};
