import { Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../theme';
import { createMemoryHistory } from 'history';

export default function MockContext(props) {
  const { url } = props;
  const history = props.history ?? createMemoryHistory();

  if (url) {
    history.push(url);
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router history={history}>{props.children}</Router>
      </ThemeProvider>
    </>
  );
}
