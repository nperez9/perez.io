import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Divider, ShowCode } from '../../library';
import PortfolioTabs from './PortfolioTabs';

const style = { textAlign: 'center' } as React.CSSProperties;

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={1800}>
      <h1 style={style}>
        <ShowCode tag={'h1'}>{t('portfolio.title')}</ShowCode>
      </h1>
      <h3 style={style}>
        <ShowCode tag={'h2'}>{t('portfolio.subtitle')} &#128517;</ShowCode>
      </h3>
      <Divider />
      <PortfolioTabs />
    </Container>
  );
};

export default Portfolio;
