import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, orange, purple, red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[400],
    },
    secondary: {
      main: amber.A400,
    },
    warning: {
      main: orange.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;