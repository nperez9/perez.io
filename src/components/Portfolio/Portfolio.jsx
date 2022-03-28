/** @jsx jsx */
import { jsx } from '@emotion/core';

import { ShowCode } from '../core/ShowCode';
import { Container, Divider } from '../../library';

import { useTranslation } from 'react-i18next';

const style = {
  h1: {
    textAlign: "center"
  }
};

const Portfolio = () => {
  const { t } = useTranslation();
  
  return (
    <Container css={style}>
      <h1>
        <ShowCode tag={"h1"}>
          {t("portfolio.title")}
        </ShowCode>
      </h1>
      <Divider />
    </Container>
  );
};

export default Portfolio;