import React from 'react';
import { useTranslation } from 'react-i18next';

const style = {
  display: 'inline-block',
  marginLeft: '10px',
  '#lng_select': {
    select: {
      padding: '2px',
    },
  },
  select: {
    backgroundColor: '#272822',
    color: '#d6d6d6',
    fontFamily: 'sans-serif',
  },
};

export const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div id="lng_select">
        <select onChange={changeLanguage}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePicker;
