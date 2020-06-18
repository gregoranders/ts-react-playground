import React, { FunctionComponent, memo } from 'react';
import { useRecoilValue } from 'recoil';
import { element as IsElement } from 'prop-types';

import { ThemeProvider as MuiThemeProvider, colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import ThemeAtom, { Theme } from '@models/theme';

const palette = {
  primary: {
    main: colors.blueGrey['700'],
  },
};

export const themeLight = responsiveFontSizes(
  createMuiTheme({
    palette,
  }),
);

export const themeDark = responsiveFontSizes(
  createMuiTheme({
    palette: {
      ...palette,
      type: 'dark',
    },
  }),
);

type Props = {
  children?: React.ReactNode;
};

themeLight;
themeDark;

export const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const theme = useRecoilValue(ThemeAtom);
  return <MuiThemeProvider theme={theme === Theme.DARK ? themeDark : themeLight}>{children}</MuiThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.defaultProps = {
  children: <h1>{ThemeProvider.displayName}</h1>,
};

ThemeProvider.propTypes = {
  children: IsElement,
};

export default memo(ThemeProvider);
