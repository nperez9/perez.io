/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { Link, BrowserRouter } from 'react-router-dom';

import { container } from '../../library';

const style = {
  ...container,
  padding: '10px 0',
  textAling: 'center',
  marginBottom: 30,
  '> a': {
    marginRight: 25,
    color: 'black', 
  }
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <nav css={style}>
      <BrowserRouter>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">{ t('header.about') }</Link>
        <Link to="/contact">{ t('header.contact') }</Link>
      </BrowserRouter>
    </nav>
  );
}

export default Header;