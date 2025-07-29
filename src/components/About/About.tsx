import React from 'react';
import { Divider, container } from '../../library';
import { AboutHeader } from './components/AboutHeader';
import { AboutTextBlock } from './components/AboutTextBlock';

const style = {
  ...container,
};

const About: React.FC = () => {
  return (
    <main style={style}>
      <AboutHeader />
      <Divider />
      <AboutTextBlock textKey="history" numOfTextBlocks={6} />
    </main>
  );
};

export default About;
