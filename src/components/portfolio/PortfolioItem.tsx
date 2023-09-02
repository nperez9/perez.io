/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';

import { ButtonLink, Divider, colors, ShowCode } from '../../library';
import { publicResource } from '../../utils';
import { PortfolioItem } from '../../types';

const style = {
  display: 'flex',
  maxHeight: '300px',
  width: '100%',
  padding: '20px 0',
  marginTop: '25px',
  '.item-image': {
    width: '35%',
    overflow: 'hidden',
    borderRadius: '10px',
    border: `2px solid ${colors.pageColor}`,
    img: {
      width: '100%',
    },
  },
  '.item-content': {
    padding: '0 20px',
    width: '65%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    a: {
      color: colors.pageColor,
      transition: '0.3s all',
      ':hover': {
        color: colors.linkHoverColor,
      },
    },
    '.item-buttons': {
      display: 'flex',
      flexWrap: 'wrap!important',
      flexFlow: 'row',
      gap: '10px',
      justifyContent: 'flex-start',
      width: '100%',
      '> a': {
        minWidth: '200px',
      },
    },
  },
  '@media (max-width: 780px)': {
    flexFlow: 'column',
    maxHeight: 'none',
    h4: {
      marginTop: '0.5rem',
    },
    '.item-image': {
      width: '100%',
    },
    '.item-content': {
      width: '100%',
      padding: '0 10px',
    },
  },
  '@media (min-width: 1280px)': {
    maxHeight: '400px',
    '.item-image': {
      width: '45%',
    },
    '.item-content': {
      width: '55%',
    },
  },
};

export interface PortfolioItemProps {
  item: PortfolioItem;
}

export const PortfolioItemComponent: React.FC<PortfolioItemProps> = ({ item }) => {
  const goToDetail = () => {};

  return (
    <React.Fragment>
      {/* @ts-ignore */}
      <div className="item-container" css={style} onClick={goToDetail}>
        <div className="item-image">
          <img alt={item.name} src={publicResource(item.cover_image)} />
        </div>
        <div className="item-content">
          <div>
            <h4>
              <ShowCode tag="h4">
                <Link to={`/portfolio/detail/${item.id}`}>{item.name}</Link>
              </ShowCode>
            </h4>
            <Divider />
            <p>
              <ShowCode tag="p">{item.short_description} </ShowCode>
            </p>
          </div>
          <div className="item-buttons">
            {item.id && false && (
              <ButtonLink link={`/portfolio/detail/${item.id}`} isExternal={false}>
                Details
              </ButtonLink>
            )}
            {item.github_url && <ButtonLink link={item.github_url}>Code</ButtonLink>}
            {item.devlog_url && <ButtonLink link={item.devlog_url}>DevLog</ButtonLink>}
            {item.play_url && item.isPlayable && <ButtonLink link={publicResource(item.play_url)}>Play</ButtonLink>}
            {item.itch_url && <ButtonLink link={item.itch_url}>Itch.io</ButtonLink>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioItemComponent;
