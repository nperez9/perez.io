import { PortfolioItem } from '../../../types';

export const greenWild: PortfolioItem = {
  id: 6,
  type: 'videogame',
  name: 'GreenWild',
  tech: 'godot',
  cover_image: '/images/games/greenwild/scr-2.jpg',
  description_images: [
    '/images/games/greenwild/scr-2.jpg',
    '/images/games/greenwild/box-1.jpg',
    '/images/games/greenwild/scr-3.jpg',
    '/images/games/greenwild/scr-4.jpg',
  ],
  short_description: 'GreenWild little platform game made in Godot, with two levels and coins',
  description:
    'GreenWild is a charming little platform game created in Godot, designed for adventure seekers of all ages. With two thrilling levels, your mission is to explore the lush, vibrant world, collecting shimmering coins along the way. Jump, run, and overcome obstacles in this delightful quest for treasure. Can you gather all the coins and conquer the GreenWild?',
  github_url: 'https://github.com/nperez9/learnPlatform',
  itch_url: 'https://nperez9.itch.io/greenwilds',
  isPlayable: true,
  sortNumber: 10,
};
