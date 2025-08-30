import React from 'react';
import { Container, container, Divider } from '../../library';
import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';

const style = {
  ...container
};

const Home: React.FC = () => {
  return (
    <main>
      <HomeTitle />
      <Container>
        <HomeContent />
      </Container>
    </main>
  );
};

export default Home;
