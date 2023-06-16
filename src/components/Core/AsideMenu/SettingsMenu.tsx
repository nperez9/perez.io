/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import LanguagePicker from '../LenguagePicker';

const style = {};

export const SettingsMenu: React.FC<any> = () => {
  return (
    <section css={style}>
      <div>
        Lenguage:
        <LanguagePicker />
      </div>
      <div>
        Theme:
        <select name="">c</select>
      </div>
    </section>
  );
};
