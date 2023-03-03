/** @jsx jsx */
import { jsx } from '@emotion/core';
import { container } from './styles/grid';

const style = {
  ...container,
};

export const Container = ({ children }) => {
  return <section css={style}> {children} </section>;
};

export default Container;
