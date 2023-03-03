/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

const style = {
  display: 'inline-block',
  position: 'absolute',
  fontSize: 8,
  bottom: 100,
  right: -1,
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

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div css={style}>
      <div id="lng_select">
        <select onChange={changeLanguage}>
          <option value="en" name="language" defaultValue>
            EN
          </option>
          <option value="es" name="language">
            ES
          </option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePicker;
