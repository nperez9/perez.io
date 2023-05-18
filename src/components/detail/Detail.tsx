import React from 'react';
// @ts-ignore
import { Redirect, useParams } from 'react-router-dom';

import { container } from '../../library';
import { portfolioList } from '../../data';
import { DetailBody } from './components/DetailBody';

const style = {
  ...container,
};

const Detail = () => {
  const { id } = useParams<any>();
  // @ts-ignore
  const item = portfolioList.find((p) => p.id === parseInt(id));

  if (!item) {
    return <Redirect to={'/portfolio'} />;
  }

  return (
    <main style={style}>
      <DetailBody {...item} />
    </main>
  );
};

export default Detail;
