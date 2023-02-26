/** @jsx jsx */
import { jsx } from '@emotion/core';

import { container } from '../../library';
import { AboutHeader } from './AboutHeader';

const style = {
  ...container
};

const About = () => {
  return (
    <main css={style}>
      <AboutHeader />
    </main>
  );
};

export default About;