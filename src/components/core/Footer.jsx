/** @jsx jsx */
import { jsx } from '@emotion/core';
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
  '.left-side': {
    float: 'left',
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
          </svg>{' '}
          master
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
