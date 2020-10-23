/** @jsx jsx */
import { jsx } from '@emotion/core';
import { container } from '../../library';
import LenguagePicker from '../LenguagePicker';

const style = {
  ...container
}

const HomeHeader = () => {
  return (
    <footer css={style}>
      <LenguagePicker />
    </footer>
  );
};

export default HomeHeader;