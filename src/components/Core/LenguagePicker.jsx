/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

const style = {
  display: 'inline-block',
  float: 'right',
  '#lng_select': {
    width: '120px',
    float: 'left',
    select: {
      padding: '2px'
    }
  },
  select: {
    backgroundColor: '#272822',
    color: '#d6d6d6',
    fontFamily: "'Roboto Mono', monospace",
  }
};

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div css={style}>
      <div id="lng_select" >
        <select onChange={changeLanguage}>
          <option value="en" name="language" defaultValue>
            eng
          </option>
          <option value="es" name="language">
            esp
          </option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePicker;
