import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { theme } from 'assets/css/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorProvider from 'hooks/useError';

interface props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: props): JSX.Element => {
  return (
    <Router>
      <ErrorProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
