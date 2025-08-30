import React from 'react';
import { useTranslation } from 'react-i18next';

import { socialLinks } from '../../data/socialLinks';
import { tecnologies } from '../../data/tecnologies';
import { Divider, ButtonLink, ShowCode } from '../../library';

import TecnologiesGroup from './TecnologiesGroup';
import styles from './HomeContent.module.css';
import { HomeCheckMyCv } from './components/HomeCheckMyCv';

const HomeContent = () => {
  let tecnologiesContent = null;
  let content = null;
  const { t } = useTranslation();

  tecnologiesContent = tecnologies.map((tecGroup) => {
    return <TecnologiesGroup tecGroup={tecGroup} key={tecGroup.groupName} />;
  });

  content = socialLinks.map((sl) => {
    return (
      <div key={sl.name}>
        <ButtonLink link={sl.link}>{sl.name}</ButtonLink>
      </div>
    );
  });

  return (
    <section className={styles.homeContent}>
      <Divider />
      <HomeCheckMyCv />
      <Divider />
      <div>
        <h3>
          <ShowCode tag="h3">{t('home.tecnologies')}</ShowCode>
        </h3>
        <div>{tecnologiesContent}</div>
      </div>
      <Divider />
      <div>
        <h3>
          <ShowCode tag="h3">{t('home.findMe')}</ShowCode>
        </h3>
        <div className={styles.socialBlock}>{content}</div>
      </div>
    </section>
  );
};

export default HomeContent;
