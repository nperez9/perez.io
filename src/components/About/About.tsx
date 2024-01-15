/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Divider, container } from '../../library';
import { AboutHeader } from './components/AboutHeader';
import { AboutTextBlock } from './components/AboutTextBlock';

const style = {
  ...container,
};

const About = () => {
  return (
    <main css={style}>
      <AboutHeader />
      <Divider />
      <AboutTextBlock textKey="history" numOfTextBlocks={6} />
    </main>
  );
};

export default About;
