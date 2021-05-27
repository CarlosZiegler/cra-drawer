import { Router } from 'react-router-dom';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { createMemoryHistory } from 'history';
import { GlobalStyle, theme } from '../theme';
import { CompanyContext } from '../context';

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

  const [company, setCompany] = useState(props.company ?? null);

  return (
    <QueryClientProvider client={queryClient}>
      <CompanyContext.Provider value={{ company, setCompany }}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router history={history}>{props.children}</Router>
        </ThemeProvider>
      </CompanyContext.Provider>
    </QueryClientProvider>
  );
}
