import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { theme } from 'assets/css/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorProvider from 'hooks/useError';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import AuthProvider from 'hooks/useAuth';
import { Provider } from 'react-redux';
import { store } from 'store';

interface props {
  children: React.ReactNode;
}

const client = new GraphQLClient({
  url: 'https://api-eu-central-1.graphcms.com/v2/cksa4671l2di901z3e3fu2qlq/master'
});

const AppProviders = ({ children }: props): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorProvider>
          <ClientContext.Provider value={client}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
          </ClientContext.Provider>
        </ErrorProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
