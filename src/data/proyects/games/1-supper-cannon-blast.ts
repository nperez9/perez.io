import { PortfolioItem } from '../../../types';

export const supperCannonBlast: PortfolioItem = {
  id: 1,
  type: 'videogame',
  name: 'Super Cannon Blast!',
  tech: 'unity',
  sortNumber: 1,
  cover_image: '/images/portfolio/cannon-blast/cover-imag.png',
  description_images: ['/images/portfolio/cannon-blast/screen-level-1.png', '/images/portfolio/cannon-blast/screen-level-2.png'],
  short_description: 'An arcade 2D game full of action, based in barrel mechanincs, go to the end of the level and grab the coins!',
  github_url: 'https://github.com/nperez9/cannon-blast',
  itch_url: 'https://nperez9.itch.io/super-cannon-blast',
  description: `
    This is a classic arcade game inspired by the barrel mechanic of the Donkey Kong Country series. 
    Navigate through cannons in four different galaxies to destroy the evil emperor's ship! Collect all the coins and get rich! 
    But... be careful, once you shoot the cannon, it will be destroyed! You can't go back, so think carefully before each shot.
    You cand find the code for this version of the game on github, it's build in a wierd vesion of unity (2021.7.1) but you probably won't have much issues on runnig it for the LTS version.
    
    https://github.com/nperez9/cannon-blast
    
    Feel free to use any part of the code/project for your's.
    
    Credits for the assets:
    Space Fiction by Quarkstar (c) copyright 2018 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/Quarkstar/57369 
    1985 by Blake (c) copyright 2015 Licensed under a Creative Commons Sampling Plus license. http://dig.ccmixter.org/files/blakeht/50943 
    Stardust (Ziggy is coming) by Kraftamt (c) copyright 2020 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/Karstenholymoly/62493 Ft: Platinum Butterfly
    Virgotronic by Martijn de Boer (NiGiD) (c) copyright 2018 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/NiGiD/58421 Ft: Levihica
    Kenney - Some of the SFX Sounds and base sprites https://www.kenney.nl/assets
    
    Happy gaming!
  `,
};
