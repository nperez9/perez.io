import { PortfolioItem } from '../../../types';

export const rangeon: PortfolioItem = {
  id: 8,
  type: 'videogame',
  name: 'Rangeon',
  tech: 'unity',
  sortNumber: 4,
  cover_image: '/images/games/rangeon/1.png',
  description_images: ['/images/games/rangeon/2.png', '/images/games/rangeon/3.png', '/images/games/rangeon/1.png'],
  short_description: 'Enter the Rangeon! a 2D procedural game with seeds!',
  description: `
    Enter in the rageon, pass trought the levels, get the keys, evade the enemies and get to the end of the level!
  `,
  github_url: 'https://github.com/nperez9/rangeon',
  external_play_url: 'https://nperez9.github.io/rangeon/',
  isPlayable: true,
};
