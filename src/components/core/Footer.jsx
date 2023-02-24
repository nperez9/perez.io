/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CloudIcon } from '../../library/Icons';
import { colors } from '../../library/styles';

const style = {
  bottom: 0,
  width: '100%',
  float: 'left',
  position: 'fixed',
  marginTop: 40,
  backgroundColor: colors.uiFooterBg,
  color: colors.uiFooterColor,
  borderTop: `1px solid ${colors.uiFooterColor}`,
  fontSize: '0.8rem',
  padding: '4px',
  fontFamily: 'sans-serif',
  '.left-side': {
    marginLeft: '6px',
    float: 'left',
    '> span': {
      marginLeft: '6px',
    }
  },
  '.right-side': {
    float: 'right',
    display: 'inline-block',
    '> span': {
      marginRight: '15px',
    },
  },
};

const Footer = () => {
  return (
    <footer css={style}>
      <div>
        <span className="left-side">
          <CloudIcon />
          <span>master</span>
        </span>
        <span className="right-side">
          <span>Ln 29, Col 29</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
