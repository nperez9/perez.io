import React from 'react';
import { container, Divider } from '../../library';
import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';

const style = {
  ...container
};

const Home: React.FC = () => {
  return (
    <main style={style}>
      <HomeTitle />
      <Divider />
      <HomeContent />
    </main>
  );
};

export default Home;
