import React from 'react';
import { socialLinks } from '../../../data';
import { colors, CustomAccordeon, CustomAccordeonItem, Icons } from '../../../library';
import styles from './SocialMenu.module.css';

export const SocialMenu = () => {
  const results = socialLinks.map((sl) => (
    <a key={sl.link} href={sl.link} target="_blank" rel="noopener noreferrer">
      <CustomAccordeonItem content={sl.name} icon={sl?.icon || 'javascript'} />
    </a>
  ));

  return (
    <div className={styles.socialMenu}>
      <div className={styles.input}>
        <Icons className={styles.inputIcon} icon="rightArrow" />
        <span className={styles.inputTextBox}>Nicolas Agustin Perez</span>
      </div>
      <div className={styles.resultsSubText}>{`${socialLinks.length} results in 1 files`}</div>
      <div>
        <CustomAccordeon title={'Social Networks'} isOpenDefault>
          {results}
        </CustomAccordeon>
      </div>
    </div>
  );
};
