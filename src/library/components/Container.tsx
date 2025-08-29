import React from 'react';
import { container } from '../styles/grid';

const style = {
  ...container,
};

export interface ContainerProps {
  maxWidth?: number;
  full?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, maxWidth, full }) => {
  let customStyle;
  if (full) {
    customStyle = {
      marginLeft: 45,
      width: '100%',
      margin: 0,
    };
  }
  else if (maxWidth) {
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
