import React from 'react';
import { container } from './styles/grid';

export interface ContainerProps {
  maxWidth?: number;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, maxWidth }) => {
  let customStyle;
  if (maxWidth) {
    customStyle = {
      ...container,
      maxWidth: maxWidth,
      margin: '0 auto',
    };
  } else {
    customStyle = container;
  }

  return <section style={customStyle}> {children} </section>;
};

export default Container;
