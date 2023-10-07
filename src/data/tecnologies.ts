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
        name: 'C#',
        logo: 'c-logo.png',
      },
      {
        name: 'Aseprite',
        logo: 'asesprite-logo.png',
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
        name: 'Angular',
        logo: 'angular-logo.png',
      },
      {
        name: 'Webpack',
        logo: 'webpack-logo.png',
      },
      {
        name: 'TS',
        logo: 'ts-logo.png',
      },
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
        name: 'TS',
        logo: 'ts-logo.png',
      },
    ],
  },
];
