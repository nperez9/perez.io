import { PortfolioItem } from '../../../types';

export const doubleJumpDX: PortfolioItem = {
  id: 6,
  type: 'videogame',
  name: 'Double Jump DX',
  tech: 'godot',
  cover_image: '/images/games/double-jump-dx/cover.jpg',
  description_images: [
    '/images/games/double-jump-dx/1.jpg',
    '/images/games/double-jump-dx/2.jpg',
    '/images/games/double-jump-dx/3.jpg',
  ],
  short_description: 'Double Jump DX little platform game made in Godot, with two levels and coins',
  description:
    'Double Jump DX is a charming little platform game created in Godot, designed for adventure seekers of all ages. With two thrilling levels, your mission is to explore the lush, vibrant world, collecting shimmering coins along the way. Jump, run, and overcome obstacles in this delightful quest for treasure. Can you gather all the coins and conquer the Double Jump DX?',
  itch_url: 'https://nperez9.itch.io/double-jump-dx',
  video: {
    title: 'Double Jump DX Gameplay',
    url: 'https://www.youtube.com/watch?v=Zt9n8sXo2j0',
  },
  isPlayable: true,
  sortNumber: 10,
};
