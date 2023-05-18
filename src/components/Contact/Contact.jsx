import React from 'react';
import { useTranslation } from 'react-i18next';

import { socialLinks } from '../../data/socialLinks';
import styles from './Contact.scss';

const Contact = () => {
  const contactLinks = ['linkedin', 'gmail'];
  const { t } = useTranslation();

  const contentSocialLinks = socialLinks.map(({ name, link, text }) => {
    if (!contactLinks.includes(name.toLocaleLowerCase())) {
      return null;
    }

    return (
      <a key={name} href={link} target="_blank" rel="noopener noreferrer">
        <i className={`nes-icon ${name.toLocaleLowerCase()} is-small`} />
        {t(text)}
      </a>
    );
  });

  return (
    <main className={styles.Contact}>
      <h1>Contact me!</h1>
      <div>{contentSocialLinks}</div>
    </main>
  );
};

export default Contact;
