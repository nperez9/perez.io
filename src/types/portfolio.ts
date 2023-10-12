export interface PortfolioItem {
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
  download_url?: string;
  video?: {
    title: string;
    url: string;
  };
}
