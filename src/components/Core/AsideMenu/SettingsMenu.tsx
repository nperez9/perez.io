import React from 'react';

import LanguagePicker from '../LenguagePicker';

export const SettingsMenu: React.FC<any> = () => {
  return (
    <section>
      <div>
        Lenguage:
        <LanguagePicker />
      </div>
    </section>
  );
};
