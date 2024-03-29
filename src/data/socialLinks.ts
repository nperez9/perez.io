import { IconsDB } from '../library';

export interface SocialLinks {
  link: string;
  name: string;
  text: string;
  icon?: IconsDB;
}

export const socialLinks: SocialLinks[] = [
  {
    link: 'https://github.com/nperez9',
    name: 'GitHub',
    text: 'contact.github',
    icon: 'github',
  },
  {
    link: 'https://stackoverflow.com/users/6888888/nperez9',
    name: 'StackOverflow',
    text: 'contact.stackoverflow',
    icon: 'stackoverflow',
  },
  {
    link: 'https://www.linkedin.com/in/nicol%C3%A1s-agust%C3%ADn-perez-23a5b1aa',
    name: 'LinkedIn',
    text: 'contact.linkedin',
    icon: 'linkedin',
  },
  {
    link: 'mailto:nicolasperez95.a@gmail.com',
    name: 'Gmail',
    text: 'contact.gmail',
    icon: 'gmail',
  },
  {
    link: 'https://nperez9.itch.io/',
    name: 'Itch.io',
    text: 'contact.gmail',
    icon: 'itchio',
  },
];
