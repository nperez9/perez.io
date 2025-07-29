// TODO: this will be a a cool implementation later :)
import { Tech } from '../types';

export type TechData = {
  [key in Tech]: {
    icon?: string;
    logo?: string;
  };
};

export const techData: TechData = {
  phaser: {},
  godot: {},
  unity: {},
  javascript: {},
  node: {},
  react: {},
  typescript: {},
  nextjs: {}
};
