/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../../library';

const style = {
  textAlign: 'center',
  position: 'relative',  
};


export const AboutHeader = () => {
  const { t } = useTranslation();

  return (
    <section css={style}>
      <h1>
        <ShowCode tag="h1">{t('about.title')}</ShowCode>
      </h1>
      <h2>
        <ShowCode tag="h2">{t('about.subtitle')}</ShowCode>
      </h2>
    </section>
  );
};
