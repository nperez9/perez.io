// Here should be a list of LINKS to the past
import React from 'react';

import { PortfolioItem } from '../../../types';
import { ButtonLink, ShowCode } from '../../../library';
import { publicResource } from '../../../utils';

import styles from './DetailLinks.module.scss';

export const DetailLinks: React.FC<PortfolioItem> = ({ itch_url, github_url, devlog_url, play_url }) => {
  return (
    <div className={styles.DetailLinks}>
      <div>
        <ShowCode tag="title">Links</ShowCode>
      </div>
      {github_url && <ButtonLink link={github_url}>Code</ButtonLink>}
      {devlog_url && <ButtonLink link={devlog_url}>DevLog</ButtonLink>}
      {play_url && <ButtonLink link={publicResource(play_url)}>Play</ButtonLink>}
      {itch_url && <ButtonLink link={itch_url}>Itch.io</ButtonLink>}
    </div>
  );
};
