import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { theme } from 'assets/css/theme';
import { ThemeProvider } from 'styled-components';

interface props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: props): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
