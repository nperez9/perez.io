export interface PortfolioList {
  id: number;
  type: 'videogame' | 'web';
  name: string;
  cover_image: string;
  description_images?: string[];
  videos?: string[];
  description?: string;
  description_en?: string;
  description_es?: string;
  short_description: string;
  short_description_en?: string;
  short_description_es?: string;
  github_url?: string;
  isPlayable?: boolean;
  play_url?: string;
  itch_url?: string;
  devlog_url?: string;
}

export const portfolioList: PortfolioList[] = [
  {
    id: 1,
    type: 'videogame',
    name: 'Super Cannon Blast!',
    cover_image: '/images/portfolio/cannon-blast/cover-imag.png',
    description_images: ['/images/portfolio/cannon-blast/screen-level-1.png', '/images/portfolio/cannon-blast/screen-level-2.png'],
    videos: [],
    description: 'A full action arcade game, inspired by donkey kong country barrel mechanic',
    description_en: 'A full action arcade game, inspired by donkey kong country barrel mechanic',
    description_es: 'Juego de acción arcade, inspirado en la mecanica de barril de Donkey Kong Country',
    short_description: 'An arcade 2D game full of action, based in barrel mechanincs, go to the end of the level and grab the coins!',
    short_description_en: 'An arcade 2D game full of action, based in barrel mechanincs, go to the end of the level and grab the coins!',
    short_description_es: 'Un juego de acción arcade en 2D, basado en la mecanica de barilles de Donkey Kong ¡Ve al final del nivel y junta todas las monedas!',
    github_url: 'https://github.com/nperez9/cannon-blast',
    isPlayable: false,
    play_url: '/proyects/cannon-blast',
    itch_url: 'https://nperez9.itch.io/super-cannon-blast',
  },
  {
    id: 2,
    type: 'videogame',
    name: 'Pokeclon',
    cover_image: '/images/portfolio/pokeclon/pc-3.png',
    description_images: ['/images/portfolio/pokeclon/pc-2.png', '/images/portfolio/pokeclon/pc-4.png'],
    videos: [],
    description: 'A full action arcade game, inspired by donkey kong country',
    short_description: 'A fan mande pokemon game made in unity',
    github_url: 'https://github.com/nperez9/poketSouls',
    isPlayable: false,
    devlog_url: 'https://github.com/nperez9/poketSouls/wiki/Devlog',
    play_url: '',
    itch_url: '',
  },
  {
    id: 3,
    type: 'videogame',
    name: 'Wood-Cutter',
    cover_image: '/images/portfolio/wood-cutter/front.png',
    description_images: ['/images/portfolio/wood-cutter/front.png'],
    videos: [],
    description: 'A full action arcade game, inspired by donkey kong country',
    short_description: 'A 2D arcade videogame made in JS, with parser',
    github_url: 'https://github.com/nperez9/wood-axe-game',
    isPlayable: true,
    devlog_url: '',
    play_url: '/proyects/wood-cutter',
    itch_url: '',
  },
  {
    id: 7,
    type: 'web',
    name: 'Api Auth',
    cover_image: '/images/portfolio/api-auth/cover_image.png',
    description_images: [],
    videos: [],
    description: "An authentication microservice build in NodeJS, with express, typescript and mongo. Mostly used as base for my futher Node Api's",
    short_description: 'An authentication microservice build in NodeJS, with express, typescript and mongodb. Mostly used as base for my further Node Apis',
    github_url: 'https://github.com/nperez9/api-auth',
    isPlayable: false,
    devlog_url: '',
    play_url: '',
    itch_url: '',
  },
  {
    id: 5,
    type: 'web',
    name: 'React Hypercoss',
    cover_image: '/images/portfolio/react-hypercross/cover_image.png',
    description_images: [],
    videos: [],
    description: 'Component library based on bootstrap framework, build on storybook and with unit testing',
    short_description: 'Component library based on bootstrap framework, build on storybook, typescript and with unit testing. Only for React!',
    github_url: 'https://github.com/nperez9/react-hypercross',
    isPlayable: false,
    devlog_url: '',
    play_url: '',
    itch_url: '',
  },
  {
    id: 4,
    type: 'web',
    name: 'React redux',
    cover_image: '/images/portfolio/react-redux/cover_image.png',
    description_images: ['/images/portfolio/react-redux/image_2.png'],
    videos: [],
    description: 'React redux implementation for academind course. this includes classic classic implementation and also the use of @redux/toolkit',
    short_description: 'React redux implementation for academind course. this includes classic store implementation and also the use of @redux/toolkit',
    github_url: 'https://github.com/nperez9/react-functional-redux',
    isPlayable: false,
    devlog_url: '',
    play_url: '',
    itch_url: '',
  },
  {
    id: 8,
    type: 'web',
    name: 'This Website',
    cover_image: '/images/portfolio/website/cover_image.png',
    description_images: [],
    videos: [],
    description: "Yes! you can see the source code of this website, it's not my fanciest project, but it does have some cool stuff like multiple languages",
    short_description: "Yes! you can see the source code of this website, it's not my fanciest project, but it does have some cool stuff like multiple languages and emotion",
    github_url: 'https://github.com/nperez9/perez.io',
    isPlayable: false,
    devlog_url: '',
    play_url: '',
    itch_url: '',
  },
  {
    id: 6,
    type: 'web',
    name: 'Micro wallet',
    cover_image: '/images/portfolio/wallet-test/cover_image.png',
    description_images: [],
    videos: [],
    description: 'Code challenge for a crypto wallet company, made with React and context',
    short_description: 'Code challenge for a crypto wallet company, made with React and context API',
    github_url: 'https://github.com/nperez9/test-task',
    isPlayable: false,
    devlog_url: '',
    play_url: '',
    itch_url: '',
  },
];
