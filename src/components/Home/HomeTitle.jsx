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
  span: {
    color: '#F92672'
  }
};

const HomeTitle = () => {
  const { t } = useTranslation();

  return (
    <div css={style}>
      <div className="img-container">
        <img src="me.gif" alt="Nicolas Perez, software developer" />
      </div>
      <h1>
        <span> {'<h1> '} </span> 
        { t('home.title') } 
        <span>{' </h1>'}</span>
      </h1>
      <h2>
        <span> {'<h2> '} </span> 
        {t('home.subtitle')}
        <span> {' </h2>'} </span>
      </h2>
      <Divider />
    </div>
  );
};

export default HomeTitle;
