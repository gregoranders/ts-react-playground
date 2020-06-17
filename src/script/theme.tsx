import React, { FunctionComponent, memo } from 'react';
import { element as IsElement } from 'prop-types';

import { createMuiTheme, colors, ThemeProvider as MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: colors.deepPurple['800'],
      },
    },
  }),
);

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.defaultProps = {
  children: <h1>{ThemeProvider.displayName}</h1>,
};

ThemeProvider.propTypes = {
  children: IsElement,
};

export default memo(ThemeProvider);
