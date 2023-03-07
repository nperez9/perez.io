/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { container } from './styles/grid';

const style = {
  ...container,
};

export const Container: React.FC<any> = ({ children }) => {
  return <section css={style}> {children} </section>;
};

export default Container;
