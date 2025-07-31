import React from 'react';
import { colors } from '../styles';

export interface ShowCodeProps {
  tag: string;
  children: React.ReactNode;
  className?: string;
}

export const ShowCode: React.FC<ShowCodeProps> = ({ tag, children, className = '' }) => {
  const style = { color: colors.codeColor };

  return (
    <>
      <span style={style} className={className}>{`<${tag}> `}</span>
      {children}
      <span style={style} className={className}>{` </${tag}>`}</span>
    </>
  );
};

export default ShowCode;
