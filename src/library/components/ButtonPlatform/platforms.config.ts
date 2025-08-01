import { PlatformType } from '../../types';
import { iconsDB } from '@library/Icons/iconsDB';

export type Platforms = {
  [key in PlatformType]: {
    svgIcon: typeof iconsDB[keyof typeof iconsDB];
    alt: string;
    color: string;
  };
};

export const platforms: Platforms = {
  [PlatformType.Gato]: {
    svgIcon: iconsDB.itchio,
    alt: 'Gato Game Platform',
    color: 'rgb(229, 246, 140)',
  },
  [PlatformType.GamePix]: {
    svgIcon: iconsDB.itchio,
    alt: 'GamePix Game Platform',
    color: '#4587c5',
  },
  [PlatformType.Itch]: {
    svgIcon: iconsDB.itchio,
    alt: 'itch.io Game Platform',
    color: '#FF2449',
  },
  [PlatformType.Steam]: {
    svgIcon: iconsDB.itchio,
    alt: 'Steam Game Platform',
    color: '#1b283',
  },
  [PlatformType.EpicGames]: {
    svgIcon: iconsDB.itchio,
    alt: 'Steam Game Platform',
    color: '#1b283',
  },
};
