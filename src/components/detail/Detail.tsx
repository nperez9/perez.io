import React from 'react';
// @ts-ignore
import { Redirect, useParams } from 'react-router-dom';

import { container } from '../../library';
import { portfolioList } from '../../data';

const style = {
  ...container
};

const Detail = () => {
  const { id } = useParams<any>();
  // @ts-ignore
  const item = portfolioList.find(p => p.id == id);

  if (!item) {
    return <Redirect to={"/portfolio"} />;
  }

  return (
    <main style={style}>
      {id}
    </main>
  );
};

export default Detail;
