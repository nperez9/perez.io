/** @jsx jsx */
import { jsx } from '@emotion/core';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import LenguagePicker from './LenguagePicker';


import { container } from '../../library';

const style = {
  ...container,
  padding: '10px 0',
  textAling: 'center',
  marginBottom: 30,
  '> a': {
    marginRight: 25,
    color: 'black', 
  },
  LenguagePicker: {
    float: 'right',
  }
};

const Header = () => {
  // const { t } = useTranslation();

  return (
    <nav css={style}>
      {/*<Link to="/home">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">{ t('header.about') }</Link>
  <Link to="/contact">{ t('header.contact') }</Link>*/}
      <LenguagePicker />
    </nav>
  );
}

export default Header;