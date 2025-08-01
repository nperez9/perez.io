import React from 'react';
import { container } from '../styles/grid';

const style = {
  ...container,
};

export interface ContainerProps {
  maxWidth?: number;
}

export const Container: React.FC<ContainerProps> = ({ children, maxWidth }) => {
  let customStyle;
  if (maxWidth) {
    customStyle = {
      ...style,
      maxWidth: maxWidth,
      margin: '0 auto',
    };
  } else {
    customStyle = style;
  }

  return <section style={customStyle}> {children} </section>;
};

export default Container;
