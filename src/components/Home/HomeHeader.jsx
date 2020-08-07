/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next'

const style = {
  textAlign: 'center',
  marginTop: 50,
  '.divider': {
    margin: '30px auto'
  }
};

const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <div css={style}>
      <h1>{t('home.title')}</h1>
      <h3>{t('home.subtitle')}</h3>
      <div className='divider'>-----------------------------------------------</div>
    </div>
  );
};

export default HomeHeader;