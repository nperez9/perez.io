import { PortfolioItem } from '../../../types';

export const pokemodoro: PortfolioItem = {
  id: 112,
  type: 'web',
  name: 'Pokemodoro',
  tech: 'nextjs',
  cover_image: '/images/web/pokemodoro/pokemodoro-cover.png',
  description_images: ['/images/web/pokemodoro/pokemodoro-detail-1.png'],
  description:
    "Pokemodoro is a productivity tool that uses gamification and engaging techniques used in the Pokemon videogames to help you keep focus using the Pomodoro technique. Implemented multiple strategies to keep data user managment, if you are not login, the application persist on the FE trough local storage, but if you login, the data is stored in the backend and can be retrieved on any device. The application also has a pokedex with all the pokemon(The first generation at least), and you can catch them all by completing pomodoros!",
  short_description:
    'Pokemodoro - Focus and Catch Em All!',
  website_url: 'https://pokemodoro-smoky.vercel.app/',
  sortNumber: 1,
};
