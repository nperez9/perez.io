/** @jsx jsx */
import { jsx } from '@emotion/core';

import { colors } from '../../library';

const style = {
  position: 'fixed', 
  display: 'flex',
  flexFlow: 'row',
  '.side-icon-menu': {
    width: '40px',
    backgroundColor: colors.uiBg,
    textAlign: 'center',
    height: '100vh',
    fontSize: '1.2em',
    borderRight: `1px solid ${colors.uiBorder}`,
    '> div': {
      padding: '5px 10px',
      cursor: 'pointer',
      marginTop: '10px',
    }
  }
};

const SideMenu = () => {
  return (
    <aside css={style}>
      <div className="side-icon-menu">
        <div>E</div>
        <div>S</div>
        <div>T</div>
        <div>G</div>
        <div>E</div>
      </div>
      <div>
        <div>src</div>
        <div>Contact</div>
        <div>Layout</div>
        <div>LenguagePicker</div>
      </div>
    </aside>
  );
};

export default SideMenu;
