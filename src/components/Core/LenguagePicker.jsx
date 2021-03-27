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
};

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div style={style}>
      <div className="nes-select" id="lng_select" style={style}>
        <select onChange={changeLanguage}>
          <option value="en" name="language" defaultValue>
            ENG
          </option>
          <option value="es" name="language">
            ESP
          </option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePicker;
