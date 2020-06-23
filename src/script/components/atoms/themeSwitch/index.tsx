import React, { memo } from 'react';
import { useRecoilState } from 'recoil';

import { Switch } from '@material-ui/core';

import ThemeAtom, { Theme, storeTheme } from '@models/theme';

/**
 * Theme switch
 *
 * Switches between dark and light theme.
 */
export const ThemeSwitch = () => {
  const [theme, setThemeAtom] = useRecoilState(ThemeAtom);

  const setTheme = (theme: Theme) => {
    storeTheme(theme);
    setThemeAtom(theme);
  };

  const switchTheme = () => {
    switch (theme) {
      case Theme.DARK:
        setTheme(Theme.LIGHT);
        break;
      case Theme.LIGHT:
        setTheme(Theme.DARK);
        break;
    }
  };

  return <Switch onClick={switchTheme} checked={theme === Theme.DARK} />;
};

ThemeSwitch.displayName = 'ThemeSwitch';

export default memo(ThemeSwitch);
