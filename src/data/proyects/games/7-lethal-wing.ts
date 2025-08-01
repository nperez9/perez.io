import { PortfolioItem } from '../../../types';

export const lethalWing: PortfolioItem = {
  id: 7,
  type: 'videogame',
  name: 'Lethal Wing',
  tech: 'unity',
  sortNumber: 1,
  cover_image: '/images/games/lethal-wing/cover.png',
  short_description: 'An 3D arcade game like 1942, built with Unity, available on itch.io for Android',
  description: `
    First release of Lethal Wing, a 3D arcade game inspired by the classic 1942, right now is only available for android devices
    and downloadable from itch.io. The game is built with Unity and has a couple of levels, enemies and upgrades. Also, it has been
    applied some optimizations like object pooling and a custom shader for the skybox to provide a great experience in less
    powerful devices.
  `,
  itch_url: 'https://nperez9.itch.io/lethal-wing',
};
