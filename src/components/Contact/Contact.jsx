/* eslint-disable react-hooks/rules-of-hooks */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { container } from '../../library/styles/grid';
import { socialLinks } from '../../data/socialLinks';

const style = {
  ...container,
  textAlign: 'center',
  a: {
    display: 'block',
    margin: 12,
    i: {
      heigth: 24,
      width: 24,
      marginRight: 14,
    },
  },
};

const contact = () => {
  const contactLinks = ['linkedin', 'gmail'];
  const { t } = useTranslation();

  const contentSocialLinks = socialLinks.map(({ name, link, text }) => {
    if (!contactLinks.includes(name.toLocaleLowerCase())) {
      return null;
    }
    console.info(text);
    return (
      <a key={name} href={link} target="_blank" rel="noopener noreferrer">
        <i className={`nes-icon ${name.toLocaleLowerCase()} is-small`} />
        {t(text)}
      </a>
    );
  });

  return (
    <main css={style}>
      <h1>Contact me!</h1>
      <div>{contentSocialLinks}</div>
    </main>
  );
};

export default contact;
