/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

const style = {
  textAlign: 'center',
  position: 'relative',
  '.divider': {
    margin: '30px auto',
  },
  img: {
    width: '200px',
    heigth: '200px',
  },
  '.img-container': {
    width: '240px',
    display: 'inline-block',
    height: '220px',
    border: '2px solid black',
    marginBottom: '25px',
    borderRadius: '24px',
  },
};

const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <div css={style}>
      <div className="img-container">
        <img src="me.gif" alt="Nicolas Perez, software developer" />
      </div>
      <h1>{t('home.title')}</h1>
      <h3>{t('home.subtitle')}</h3>
      <div className="divider">-----------------------------------------------</div>
    </div>
  );
};

export default HomeTitle;
