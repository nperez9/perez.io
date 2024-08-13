import React from 'react';
// @ts-ignore
import { redirect, useParams } from 'react-router-dom';

import { portfolioList } from '../../data';
import { DetailBody } from './components/DetailBody';
import { DetailLinks } from './components/DetailLinks';
import { Container } from '../../library';

const Detail = () => {
  const { id } = useParams<any>();
  // @ts-ignore
  const item = portfolioList.find((p) => p.id === parseInt(id));

  if (!item) {
    return redirect('/portfolio');
  }

  return (
    <main>
      <Container maxWidth={1400}>
        <DetailBody {...item} />
        <DetailLinks {...item} />
      </Container>
    </main>
  );
};

export default Detail;
