import { ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import React, { useState } from 'react';
import { Sidebar } from './components';
import { HomePage, NotFoundPage } from './pages';
import { GlobalStyle, theme } from './theme';
import { Layout } from 'antd';
import { CompanyContext } from './context';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 0,
    },
  },
});

export default function App() {
  const [company, setCompany] = useState(null);

  const { Content, Footer } = Layout;
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CompanyContext.Provider value={{ company, setCompany }}>
            <Layout>
              <Sidebar />
              <Layout>
                <Content>
                  <Switch>
                    <Route
                      path={Routes.Home}
                      exact
                      component={() => <HomePage />}
                    />
                    <Route component={NotFoundPage} />
                  </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  Carlos Ziegler ©2021 Created with Ant UED
                </Footer>
              </Layout>
            </Layout>
          </CompanyContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}
