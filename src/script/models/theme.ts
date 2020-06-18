import { atom } from 'recoil';

export enum Theme {
  LIGHT = 0,
  DARK = 1,
}

const THEME_ATOM_KEY = 'themeAtom';

export const loadTheme = (): Theme => {
  const theme = localStorage.getItem(THEME_ATOM_KEY);
  if (theme) {
    return parseInt(theme);
  }
  return Theme.LIGHT;
};

export const storeTheme = (theme: Theme): void => {
  localStorage.setItem(THEME_ATOM_KEY, theme.toString());
};

export const ThemeAtom = atom({
  key: THEME_ATOM_KEY,
  default: loadTheme(),
});

export default ThemeAtom;
