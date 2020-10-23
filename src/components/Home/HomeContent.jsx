/** @jsx jsx */
import { jsx } from '@emotion/core';
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
      <h4>You can find me in:</h4>
      <div className="social-block">{content}</div>
    </section>
  );
};

export default HomeContent;
