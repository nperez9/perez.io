import { Tech } from './techs';

export interface PortfolioItem {
  id: number;
  type: 'videogame' | 'web';
  name: string;
  cover_image: string;
  short_description: string;
  description: string;
  tech?: Tech;
  description_images?: string[];
  sortNumber: number;
  github_url?: string;
  isPlayable?: boolean;
  play_url?: string;
  itch_url?: string;
  devlog_url?: string;
  download_url?: string;
  website_url?: string;
  external_play_url?: string;
  video?: {
    title: string;
    url: string;
  };
}
