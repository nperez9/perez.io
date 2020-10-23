/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { socialLinks } from '../../data/socialLinks';

const style = {
  textAlign: 'center',
  h4: {
    marginBottom: 30,
  },
  '.social-block': {
    display: 'flex',
    justifyContent: 'center',
    '> div': {
      padding: '0 20px',
    },
  },
};

const HomeContent = () => {
  let content = null;
  const { t } = useTranslation();

  content = socialLinks.map((sl) => {
    return (
      <div key={sl.name}>
        <a className="nes-btn" href={sl.link} target="_blank" rel="noopener noreferrer">
          {sl.name}
        </a>
      </div>
    );
  });

  return (
    <section css={style}>
      <h4>{ t('home.findMe') }</h4>
      <div className="social-block">{content}</div>
    </section>
  );
};

export default HomeContent;
