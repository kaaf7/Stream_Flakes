import { createTheme } from '@mui/material';
import { darkTheme, lightTheme } from './themes';

const defineTheme = (isDarkModOn: boolean) => {
  if (isDarkModOn) {
    return darkTheme;
  }
  return lightTheme;
};

export const themeCreator = (isDarkMode: boolean) => createTheme(defineTheme(isDarkMode));
