/** @jsx jsx */
import { jsx } from '@emotion/core';

import { ShowCode } from '../core/ShowCode';
import { Container, Divider } from '../../library';

import { useTranslation } from 'react-i18next';
import PortfolioList from './PortfolioList';

const style = {
  textAlign: "center"
};

const Portfolio = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <h1 style={style}>
        <ShowCode tag={"h1"}>
          {t("portfolio.title")}
        </ShowCode>
      </h1>
      <Divider />
      <PortfolioList />
    </Container>
  );
};

export default Portfolio;