import { ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { Header } from './components';
import { HomePage, NotFoundPage } from './pages';
import { GlobalStyle, theme } from './theme';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Switch>
            <Route path={Routes.Home} exact component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}
