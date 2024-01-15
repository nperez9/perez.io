import React from 'react';
import { colors } from './styles';

export interface ShowCodeProps {
  tag: string;
  children: React.ReactNode;
}

export const ShowCode: React.FC<ShowCodeProps> = ({ tag, children }) => {
  const style = { color: colors.codeColor };

  return (
    <>
      <span style={style}>{`<${tag}> `}</span>
      {children}
      <span style={style}>{` </${tag}>`}</span>
    </>
  );
};

export default ShowCode;
