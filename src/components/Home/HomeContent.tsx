import React from 'react';
import { useTranslation } from 'react-i18next';

import { socialLinks } from '../../data/socialLinks';
import { tecnologies } from '../../data/tecnologies';
import { Divider, ButtonLink, ShowCode } from '../../library';

import TecnologiesGroup from './TecnologiesGroup';

const style = {
  textAlign: 'center',
  h3: {
    marginBottom: 30,
    fontSize: 24,
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
    return <TecnologiesGroup tecGroup={tecGroup} key={tecGroup.groupName} />;
  });

  content = socialLinks.map((sl) => {
    return (
      <div key={sl.name}>
        <ButtonLink link={sl.link}>{sl.name}</ButtonLink>
      </div>
    );
  });

  return (
    <section css={style}>
      <div>
        <h3>
          <ShowCode tag="h3">{t('home.playMe')}</ShowCode>
        </h3>
        <div>
          <iframe
            title="Super Cannon blast!"
            src="https://itch.io/embed/1474485?linkback=true&amp;border_width=0&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=f43a3a&amp;border_color=000000"
            width="550"
            height="165"
          >
            <a href="https://nperez9.itch.io/super-cannon-blast">Super Cannon blast! by Nicolas Agustin</a>
          </iframe>
        </div>
      </div>
      <Divider />
      <div>
        <h3>
          <ShowCode tag="h3">{t('home.tecnologies')}</ShowCode>
        </h3>
        <div>{tecnologiesContent}</div>
      </div>
      <Divider />
      <div>
        <h3>
          <ShowCode tag="h3">{t('home.findMe')}</ShowCode>
        </h3>
        <div className="social-block">{content}</div>
      </div>
    </section>
  );
};

export default HomeContent;
