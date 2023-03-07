/** @jsx jsx */
import { jsx } from '@emotion/core';

import { socialLinks } from '../../../data';
import { colors, CustomAccordeon, CustomAccordeonItem, Icons } from '../../../library';

const style = {
  '.input': {
    display: 'flex',
    '.input-icon': {
      paddingTop: 3,
      width: '10%',
    },
    '.input-text-box': {
      padding: 5,
      borderRadius: 5,
      backgroundColor: colors.pageBackgroundColor,
      border: `1px solid ${colors.uiFooterColor}`,
      width: '90%',
    },
  },
};

export const SocialMenu = () => {
  const results = socialLinks.map((sl) => (
    <a href={sl.link} target="_blank" rel="noopener noreferrer">
      <CustomAccordeonItem content={sl.name} icon={sl?.icon || 'javascript'} />
    </a>
  ));

  return (
    <div css={style}>
      <div className="input">
        <Icons classname="input-icon" icon="rightArrow" />
        <span className="input-text-box">Nicolas Agustin Perez</span>
      </div>
      <div className="results-sub-text">{`${socialLinks.length} results in 1 files`}</div>
      <div>
        <CustomAccordeon title={'Social Networks'} isOpenDefault>
          {results}
        </CustomAccordeon>
      </div>
    </div>
  );
};
