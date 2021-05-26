import { ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { Sidebar } from './components';
import { HomePage, NotFoundPage } from './pages';
import { GlobalStyle, theme } from './theme';
import { Layout } from 'antd';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    cacheTime: 0,
  },
});

export default function App() {
  const { Content, Footer } = Layout;
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Sidebar />
            <Layout>
              <Content>
                <Switch>
                  <Route path={Routes.Home} exact component={HomePage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}
