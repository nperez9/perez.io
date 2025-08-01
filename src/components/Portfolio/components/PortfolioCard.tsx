import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonLink, Divider } from '../../../library';
import { publicResource } from '../../../utils';
import { PortfolioItem } from '../../../types';
import styles from './PortfolioCard.module.css';

export interface PortfolioItemProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <React.Fragment>
      <div className={styles.portfolioCard}>
        <Link to={`/portfolio/detail/${item.id}`} className={styles.portfiolioContainer}>
          <div className={styles.itemImage}>
            <img alt={item.name} src={publicResource(item.cover_image)} />
          </div>
          <div className={styles.itemContent}>
            <div>
              <h4 className={styles.portfolioTitle}>{item.name}</h4>
              <Divider />
              <p className={styles.description}>{item.short_description}</p>
            </div>
            <div className={styles.itemButtons}>
              {item.id && false && (
                <ButtonLink link={`/portfolio/detail/${item.id}`} isExternal={false}>
                  Details
                </ButtonLink>
              )}
              {item.github_url && <ButtonLink link={item.github_url}>Code</ButtonLink>}
              {item.devlog_url && <ButtonLink link={item.devlog_url}>DevLog</ButtonLink>}
              {item.play_url && item.isPlayable && <ButtonLink link={publicResource(item.play_url)}>Play!</ButtonLink>}
              {item.external_play_url && <ButtonLink link={item.external_play_url}>Play!</ButtonLink>}
              {item.itch_url && <ButtonLink link={item.itch_url}>Play!</ButtonLink>}
              {item.website_url && (
                <ButtonLink link={item.website_url} isExternal={true}>
                  Website
                </ButtonLink>
              )}
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default PortfolioCard;
