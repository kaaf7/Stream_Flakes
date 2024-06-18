import { ThemeOptions, TypographyVariantsOptions, createTheme } from "@mui/material/styles"
import { darkPalette, lightPalette } from "./palletes/Palletes"

export const typography: TypographyVariantsOptions = {
  fontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",")
}

const commonThemeProperties: ThemeOptions = {
  shape: {
    borderRadius: 6
  },
  typography: {
    ...typography
  }
}

export const lightTheme = createTheme({
  ...commonThemeProperties,
  palette: lightPalette,
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#fff"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 800,
          lineHeight: "2rem"
        }
      }
    }
  }
})

export const darkTheme = createTheme({
  ...commonThemeProperties,
  palette: darkPalette,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.025))"
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent"
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 800,
          lineHeight: "2rem"
        }
      }
    }
  }
})

export const defineTheme = (isDarkModOn: boolean) => {
  if (isDarkModOn) {
    return darkTheme
  }
  return lightTheme
}
