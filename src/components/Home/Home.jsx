/** @jsx jsx */
import { jsx } from '@emotion/core';

import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';

const style = {
  maxWidth: 1000,
  margin: '0 auto',
};

const Home = () => {
  return (
    <main css={style}>
      <HomeTitle />
      <HomeContent />
    </main>
  );
};

export default Home;
