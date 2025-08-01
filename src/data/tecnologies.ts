export interface Tecs {
  name: string;
  logo: string;
}

export interface Tecnologies {
  groupName: string;
  tecs: Tecs[];
}

export const tecnologies: Tecnologies[] = [
  {
    groupName: 'Videogames',
    tecs: [
      {
        name: 'Unity',
        logo: 'unity-logo.png',
      },
      {
        name: 'Godot',
        logo: 'godot_icon_color.png',
      },
      {
        name: 'Phaser',
        logo: 'phaser-logo.png',
      },
    ],
  },
  {
    groupName: 'Front-end',
    tecs: [
      {
        name: 'React',
        logo: 'react-icon.svg',
      },
      {
        name: 'NextJs',
        logo: 'next-logo.png',
      },
      {
        name: 'Tailwind',
        logo: 'tailwind-logo.png',
      },
      {
        name: 'Angular',
        logo: 'angular-logo.png',
      },
      {
        name: 'Redux',
        logo: 'redux-logo.png',
      }
    ],
  },
  {
    groupName: 'Back-end',
    tecs: [
      {
        name: 'NodeJs',
        logo: 'nodejs-logo.png',
      },
      {
        name: 'MongoDB',
        logo: 'mongo-logo.png',
      },
      {
        name: 'Docker',
        logo: 'docker-logo.png',
      },
      {
        name: 'MySql',
        logo: 'mysql-logo.png',
      },
      {
        name: 'PHP',
        logo: 'php-logo.png',
      },
      {
        name: 'PostgreSQL',
        logo: 'postgresql-logo.png',
      },
    ],
  },
];
