import  React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../../library';

const style: CSSProperties = {
  textAlign: 'center',
  position: 'relative',  
};


export const AboutHeader = () => {
  const { t } = useTranslation();

  return (
    <section style={style}>
      <h1>
        <ShowCode tag="h1">{t('about.title')}</ShowCode>
      </h1>
      <h2>
        <ShowCode tag="h2">{t('about.subtitle')}</ShowCode>
      </h2>
    </section>
  );
};
