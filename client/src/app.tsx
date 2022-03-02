import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import store from './store';
import PageRouter from './routing/page-router';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageRouter />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
