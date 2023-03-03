/** @jsx jsx */
import { jsx } from '@emotion/core';

import { ButtonLink, Divider, colors } from '../../library';
import { publicResource } from '../../utils';

const style = {
  display: 'flex',
  maxHeight: '300px',
  width: '100%',
  padding: '20px 0',
  marginTop: '25px',
  cursor: 'pointer',
  '.item-image': {
    width: '35%',
    overflow: 'hidden',
    img: {
      width: '100%',
      borderRadius: '10px',
      border: `2px solid ${colors.pageColor}`,
    },
  },
  '.item-content': {
    padding: '0 20px',
    width: '65%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
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
      padding: '10px',
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

const PortfolioItem = ({ item }) => {
  const goToDetail = () => {};

  return (
    <div className="item-container" css={style} onClick={goToDetail}>
      <div className="item-image">
        <img alt={item.name} src={publicResource(item.cover_image)} />
      </div>
      <div className="item-content">
        <div>
          <h4>{item.name}</h4>
          <Divider />
          <p>{item.short_description}</p>
        </div>
        <div className="item-buttons">
          {item.id && (
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
  );
};

export default PortfolioItem;
