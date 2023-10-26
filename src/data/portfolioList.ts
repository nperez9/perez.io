import { PortfolioItem } from '../types';

import { gamesPortfolio } from './proyects/games';
import { websPortfolio } from './proyects/web';

export const portfolioList: PortfolioItem[] = [...gamesPortfolio, ...websPortfolio];
