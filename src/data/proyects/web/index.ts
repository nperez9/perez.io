import { PortfolioItem } from '../../../types';
import { stoneTowerStudio } from './1-stone-tower-studio';

export const websPortfolio: PortfolioItem[] = [
  stoneTowerStudio,
  {
    id: 101,
    type: 'web',
    name: 'Api Auth',
    tech: 'node',
    cover_image: '/images/portfolio/api-auth/cover_image.png',
    description_images: [],
    description:
      "An authentication microservice build in NodeJS, with express, typescript and mongo. Mostly used as base for my futher Node Api's",
    short_description:
      'An authentication microservice build in NodeJS, with express, typescript and mongodb. Mostly used as base for my further Node Apis',
    github_url: 'https://github.com/nperez9/api-auth',
    devlog_url: '',
    play_url: '',
    itch_url: '',
    sortNumber: 1,
  },
  {
    id: 102,
    type: 'web',
    name: 'React Hypercoss',
    tech: 'react',
    cover_image: '/images/portfolio/react-hypercross/cover_image.png',
    description_images: [],
    description: 'Component library based on bootstrap framework, build on storybook and with unit testing',
    short_description:
      'Component library based on bootstrap framework, build on storybook, typescript and with unit testing. Only for React!',
    github_url: 'https://github.com/nperez9/react-hypercross',
    devlog_url: '',
    play_url: '',
    itch_url: '',
    sortNumber: 2,
  },
  {
    id: 103,
    type: 'web',
    name: 'React redux',
    tech: 'react',
    cover_image: '/images/portfolio/react-redux/cover_image.png',
    description_images: ['/images/portfolio/react-redux/image_2.png'],
    description:
      'React redux implementation for academind course. this includes classic classic implementation and also the use of @redux/toolkit',
    short_description:
      'React redux implementation for academind course. this includes classic store implementation and also the use of @redux/toolkit',
    github_url: 'https://github.com/nperez9/react-functional-redux',
    devlog_url: '',
    play_url: '',
    itch_url: '',
    sortNumber: 4,
  },
  {
    id: 104,
    type: 'web',
    name: 'This Website',
    tech: 'react',
    cover_image: '/images/portfolio/website/cover_image.png',
    description_images: [],
    description:
      "Yes! you can see the source code of this website, it's not my fanciest project, but it does have some cool stuff like multiple languages",
    short_description:
      "Yes! you can see the source code of this website, it's not my fanciest project, but it does have some cool stuff like multiple languages and emotion",
    github_url: 'https://github.com/nperez9/perez.io',
    devlog_url: '',
    play_url: '',
    itch_url: '',
    sortNumber: 3,
  },
  {
    id: 105,
    type: 'web',
    name: 'Micro wallet',
    tech: 'react',
    cover_image: '/images/portfolio/wallet-test/cover_image.png',
    description_images: [],
    description: 'Code challenge for a crypto wallet company, made with React and context',
    short_description: 'Code challenge for a crypto wallet company, made with React and context API',
    github_url: 'https://github.com/nperez9/test-task',
    devlog_url: '',
    play_url: '',
    itch_url: '',
    sortNumber: 5,
  },
];
