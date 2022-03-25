/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../core/ShowCode';

const style = {
  heigth: '100vh',
  textAlign: 'center',
  position: 'relative',
  img: {
    width: '200px',
    heigth: '200px',
  },
};

const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <section css={style}>
      <h1>
        <ShowCode tag="h1"> 
          { t('home.title') } 
        </ShowCode>
      </h1>
      <h2>
        <ShowCode tag="h2"> 
          {t('home.subtitle')}
        </ShowCode>
      </h2>
    </section>
  );
};

export default HomeTitle;
