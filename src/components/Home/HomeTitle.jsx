/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { Divider } from '../../library';

const style = {
  textAlign: 'center',
  position: 'relative',
  img: {
    width: '200px',
    heigth: '200px',
  },
  '.img-container': {
    width: '240px',
    display: 'block',
    height: '220px',
    border: '2px solid black',
    marginBottom: '25px',
    marginRight: 'auto',
    marginLeft: 'auto',
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
      <Divider />
    </div>
  );
};

export default HomeTitle;
