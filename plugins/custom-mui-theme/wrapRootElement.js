import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import theme from './theme';

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
);
