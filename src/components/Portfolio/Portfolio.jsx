/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { Container, Divider, ShowCode } from '../../library';
import PortfolioTab from './PortfolioTab';

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
      <h3 style={style}>
        <ShowCode tag={"h2"}>
          {t("portfolio.subtitle")} &#128517;
        </ShowCode>
      </h3>
      <Divider />
      <PortfolioTab />      
    </Container>
  );
};

export default Portfolio;