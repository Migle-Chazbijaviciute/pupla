import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      main: '#060607', // beveik juoda
      light: '#E6E4E4', // sviesi viso background
      dark: '#6B6767', // tamsiai pilka-srifto
    },
    secondary: {
      main: '#D9D9D7', // sviesiai pilka
      dark: '#3A3A3A', // labai tamsiai pilka
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  mixins: {
    toolbar: {
      minHeight: 72,
    },
    footer: {
      height: 64,
    },
  },
});

export default theme;
