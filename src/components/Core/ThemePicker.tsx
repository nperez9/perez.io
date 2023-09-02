import React from 'react';

export const ThemePicker = () => {
  const changeTheme = (event: any) => {};

  return (
    <div id="theme_select">
      <select onChange={changeTheme} name="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemePicker;
