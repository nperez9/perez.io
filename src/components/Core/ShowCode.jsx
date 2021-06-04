import React from 'react';

export const ShowCode = ({ tag, children }) => {
  const style = { color: '#F92672' };

  return (
    <>
      <span style={style}>{`<${tag}> `}</span>
      {children}
      <span style={style}>{` </${tag}>`}</span>
    </>
  );
};

export default ShowCode;
