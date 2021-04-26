/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { socialLinks } from '../../data/socialLinks';
import { tecnologies } from '../../data/tecnologies';
import { Divider } from '../../library';

import TecnologiesGroup from './TecnologiesGroup';

const style = {
  textAlign: 'center',
  h4: {
    marginBottom: 30,
    fontSize: 18
  },
  '.social-block': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    '@media (max-width: 780px)': {
      flexDirection: 'column',
      '> div': {
        margin: '10px auto',
      },
    },
    '> div': {
      padding: '0 20px',
    },
  },
};

const HomeContent = () => {
  let tecnologiesContent = null;
  let content = null;
  const { t } = useTranslation();

  tecnologiesContent = tecnologies.map((tecGroup) => {
    return <TecnologiesGroup tecGroup={tecGroup} />
  });

  content = socialLinks.map((sl) => {
    return (
      <div key={sl.name}>
        <a className="btn btn-primary" href={sl.link} target="_blank" rel="noopener noreferrer">
          {sl.name}
        </a>
      </div>
    );
  });


  return (
    <section css={style}>
      <div>
      <h4>{ t('home.tecnologies') }</h4>
        <div>
          { tecnologiesContent }
        </div>
      </div>
      <Divider />
      <div>
        <h4>{ t('home.findMe') }</h4>
        <div className="social-block">{content}</div>
      </div>
    </section>
  );
};

export default HomeContent;