/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container } from '../../library';

const style = {
  marginTop: 40,
  backgroundColor: '#111',
  color: 'white',
  padding: 20,
  a: {
    color: 'white',
  },
};

const HomeHeader = () => {
  return (
    <footer css={style}>
      <Container>
        <div>
          <span>
            powered by{' '}
            <a 
              href="https://nostalgic-css.github.io/NES.css/" 
              target="_blank"
              rel="noopener noreferrer"
            > 
              NES.css
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default HomeHeader;