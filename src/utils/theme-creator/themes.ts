import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
  palette: {
    type: 'dark',
    shadows: ['none'],
    primary: {
      main: '#ffebee',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: 'rgba(193,193,193,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
    },
    background: {
      paper: '#0e0e0e',
      default: '#000000',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#69238',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#fafafa',
        color: '#000000',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
};
