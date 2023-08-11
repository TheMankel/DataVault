import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#fed32c',
    },
    secondary: {
      main: '#ff6928',
    },
    background: {
      default: '#20242a',
      paper: '#2b3038',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '6px',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#ffd50f',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#ffa70f',
        },
        '::-webkit-scrollbar-track': {
          background: '#2b3038',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
