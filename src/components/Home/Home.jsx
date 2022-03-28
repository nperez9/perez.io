/** @jsx jsx */
import { jsx } from '@emotion/core';

import { container, Divider } from '../../library';
import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';

const style = {
  ...container
};

const Home = () => {
  return (
    <main css={style}>
      <HomeTitle />
      <Divider />
      <HomeContent />
    </main>
  );
};

export default Home;
