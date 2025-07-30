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
      <div className={styles.itemContainer}>
        <Link to={`/portfolio/detail/${item.id}`}>
          <div className={styles.itemImage}>
            <img alt={item.name} src={publicResource(item.cover_image)} />
          </div>
          <div className={styles.itemContent}>
            <div>
              <h4>{item.name}</h4>
              <Divider />
              <p className={styles.decription}>{item.short_description}</p>
            </div>
          </div>
          <Divider />
        </Link>
        <div className={styles.itemButtons}>
          {item.id && false && (
            <ButtonLink link={`/portfolio/detail/${item.id}`} isExternal={false}>
              Details
            </ButtonLink>
          )}
          {item.github_url && <ButtonLink link={item.github_url}>Code</ButtonLink>}
          {item.devlog_url && <ButtonLink link={item.devlog_url}>DevLog</ButtonLink>}
          {item.play_url && item.isPlayable && <ButtonLink link={publicResource(item.play_url)}>Play</ButtonLink>}
          {item.external_play_url && <ButtonLink link={item.external_play_url}>Play</ButtonLink>}
          {item.itch_url && <ButtonLink link={item.itch_url}>Itch.io</ButtonLink>}
          {item.website_url && (
            <ButtonLink link={item.website_url} isExternal={true}>
              Website
            </ButtonLink>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioCard;
