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
import ModalProvider from 'hooks/useModal';
import PopupProvider from 'hooks/usePopup';

const client = new GraphQLClient({
  url: 'https://api-eu-central-1.graphcms.com/v2/cksa4671l2di901z3e3fu2qlq/master'
});

const AppProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorProvider>
          <PopupProvider>
            <ModalProvider>
              <ClientContext.Provider value={client}>
                <ThemeProvider theme={theme}>
                  <GlobalStyles />
                  <AuthProvider>{children}</AuthProvider>
                </ThemeProvider>
              </ClientContext.Provider>
            </ModalProvider>
          </PopupProvider>
        </ErrorProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
