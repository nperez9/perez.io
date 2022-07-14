/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';

import { container } from '../../library';

const style = {
  ...container
};

const Detail = () => {
  const { id } = useParams();

  return (
    <main css={style}>
      {id}
    </main>
  );
};

export default Detail;