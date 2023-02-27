/** @jsx jsx */
import { jsx } from '@emotion/core';

import { colors, Icons } from '../../library';

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
      padding: '5px 5px',
      cursor: 'pointer',
      marginTop: '10px',
      '& :hover': {
        backgroundColor: 'white',
      }
    }
  }
};

const SideMenu = () => {
  return (
    <aside css={style}>
      <div className="side-icon-menu">
        <div><Icons icon={"files"} /></div>
        <div><Icons icon={"search"} /></div>
        <div><Icons icon={"git"} /></div>
        <div><Icons icon={"debug"} /></div>
        <div><Icons icon={"extensions"} /></div>
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
