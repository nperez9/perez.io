/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';

import { ButtonLink, Divider, colors } from '../../../library';
import { publicResource } from '../../../utils';
import { PortfolioItem } from '../../../types';

const style = {
  display: 'flex',
  flexFlow: 'column',
  width: '350px',
  border: `1px solid ${colors.pageColor}`,
  margin: '20px 10px',
  padding: 10,
  borderRadius: 10,
  transition: '0.5s all',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  '.item-image': {
    width: '100%',
    minHeight: 250,
    maxHeight: 250,
    height: '100%',
    overflow: 'hidden',
    borderRadius: '10px',
    marginBottom: 15,
    backgroundColor: '#000',
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '100%',
    },
  },
  '.decription': {
    fontSize: '1.125rem',
    color: colors.pageColor,
    transition: '0.3s all',
    height: 105,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 5px',
    margin: 0,
    ':hover': {
      color: colors.linkHoverColor,
    },
  },
  '.item-content': {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    a: {
      color: colors.pageColor,
    },
    h4: {
      textAlign: 'center',
      margin: 0,
      color: colors.pageColor,
      transition: '0.3s all',
      ':hover': {
        color: colors.linkHoverColor,
      },
    },
  },
  '.item-buttons': {
    display: 'flex',
    flexWrap: 'wrap!important',
    flexFlow: 'row',
    gap: '5px',
    justifyContent: 'space-evenly',
    width: '100%',
    '> a': {
      minWidth: '150px',
    },
  },
};

export interface PortfolioItemProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioItemProps> = ({ item }) => {
  const goToDetail = () => {};

  return (
    <React.Fragment>
      {/* @ts-ignore */}
      <div className="item-container" css={style}>
        <Link to={`/portfolio/detail/${item.id}`}>
          <div className="item-image">
            <img alt={item.name} src={publicResource(item.cover_image)} />
          </div>
          <div className="item-content">
            <div>
              <h4>{item.name}</h4>
              <Divider />
              <p className="decription">{item.short_description}</p>
            </div>
          </div>
          <Divider />
        </Link>
        <div className="item-buttons">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioCard;
