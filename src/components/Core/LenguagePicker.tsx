import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguagePicker.module.css';

export const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={styles.languagePicker}>
      <div id="lng_select">
        <select onChange={changeLanguage} name="language" defaultValue="en">
          <option value="en">
            EN
          </option>
          <option value="es">
            ES
          </option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePicker;
