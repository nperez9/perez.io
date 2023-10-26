import { PortfolioItem } from '../../../types';

export const pokeClon: PortfolioItem = {
  id: 2,
  type: 'videogame',
  name: 'Pokeclon',
  tech: 'unity',
  cover_image: '/images/portfolio/pokeclon/pc-3.png',
  description_images: ['/images/portfolio/pokeclon/pc-2.png', '/images/portfolio/pokeclon/pc-4.png'],
  short_description: 'A fan mande pokemon game made in unity',
  github_url: 'https://github.com/nperez9/poketSouls',
  devlog_url: 'https://github.com/nperez9/poketSouls/wiki/Devlog',
  video: {
    title: 'Gameplay',
    url: 'https://www.youtube.com/embed/HIPtNp3GuC4?si=4BnHl5b0juDSFaWr',
  },
  description: `
    Step into a world of adventure, strategy, and camaraderie in PokeClon, 
    an exciting Pokémon-inspired game built from the ground up in Unity. 
    Explore a vibrant, pixelated world teeming with colorful creatures, mysterious trainers, 
    and endless opportunities for epic battles and friendship.
  `,
};
