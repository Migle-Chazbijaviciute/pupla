import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      main: '#060607', // almost black
      light: '#E6E4E4', // light background
      dark: '#6B6767', // dark grey-text
    },
    secondary: {
      main: '#D9D9D7', // light grey
      dark: '#3A3A3A', // very dark grey
    },
  },
  typography: {
    fontFamily: '\'Montserrat\', sans-serif',
  },
  mixins: {
    toolbar: {
      minHeight: 72,
    },
    navigation: {
      minHeight: 72,
    },
    footer: {
      height: 58,
    },
  },
});

export default theme;
