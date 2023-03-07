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
    <CustomAccordeon title={sl.name} isOpenDefault>
      <CustomAccordeonItem content={sl.name} icon={sl?.icon || 'javascript'} />
    </CustomAccordeon>
  ));

  return (
    <div css={style}>
      <div className="input">
        <Icons classname="input-icon" icon="rightArrow" />
        <span className="input-text-box">Nicolas Agustin Perez</span>
      </div>
      <div className="results-sub-text">{`${socialLinks.length} results in ${socialLinks.length} files`}</div>
      <div>{results}</div>
    </div>
  );
};
