/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container } from '../../library';
import LenguagePicker from '../LenguagePicker';

const style = {
  marginTop: 40,
  backgroundColor: '#111',
  color: 'white',
  padding: 20,
};

const HomeHeader = () => {
  return (
    <footer css={style}>
      <Container>
        <LenguagePicker />
      </Container>
    </footer>
  );
};

export default HomeHeader;