/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

const style = {
  textAlign: 'center',
  position: 'relative',
  marginTop: 50,
  '.divider': {
    margin: '30px auto',
  },
  i: {
    position: 'absolute',
    right: '40px',
    top: 0,
  },
};

const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <div css={style}>
      <h1>{t('home.title')}</h1>
      <h3>{t('home.subtitle')}</h3>
      <i class="nes-octocat animate is-small"></i>
      <div className="divider">-----------------------------------------------</div>
    </div>
  );
};

export default HomeTitle;
