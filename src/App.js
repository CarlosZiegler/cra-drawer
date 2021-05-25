import { ThemeProvider } from 'styled-components';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';

import { Header } from '@components';
import { LoginPage, HomePage, NotFoundPage } from '@pages';
import { GlobalStyle, theme } from '@theme';

export default function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {!isLoggedIn && (
          <Switch>
            <Route path={Routes.auth.Login} component={LoginPage} />
            <Redirect to={Routes.auth.Login} />
          </Switch>
        )}
        {isLoggedIn && (
          <>
            <Header />
            <Switch>
              <Route path={Routes.Home} exact component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </>
        )}
      </ThemeProvider>
    </Router>
  );
}
