import { Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../theme';
import { createMemoryHistory } from 'history';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    refetchOnWindowFocus: false,
  },
});

export default function MockContext(props) {
  const { url } = props;
  const history = props.history ?? createMemoryHistory();

  if (url) {
    history.push(url);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router history={history}>{props.children}</Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
