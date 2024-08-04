import type { PaletteOptions } from "@mui/material/styles"

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#bcbcbc",
    contrastText: "#fff"
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#fff"
  },
  background: {
    default: "#000000",
    paper: "#242424"
  },
  success: {
    main: "#67be23",
    contrastText: "#fff"
  },
  error: {
    main: "#ee2a1e",
    contrastText: "#fff"
  },
  warning: {
    main: "#cf1414",
    contrastText: "#fff"
  },
  info: {
    main: "#1890ff",
    contrastText: "#fff"
  },
  divider: "#bcbcbc",
  text: {
    primary: "#fff",
    secondary: "rgba(255,255,255,0.7)",
    disabled: "#d1d1d1"
  }
}

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#67be23",
    contrastText: "#fff"
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#fff"
  },
  background: {
    default: "#f0f0f0",
    paper: "#ffffff"
  },
  success: {
    main: "#67be23",
    contrastText: "#fff"
  },
  error: {
    main: "#fa541c",
    contrastText: "#fff"
  },
  warning: {
    main: "#cf1414",
    contrastText: "#fff"
  },
  info: {
    main: "#0b82f0",
    contrastText: "#fff"
  },
  divider: "rgba(0,0,0,0)",
  text: {
    primary: "#626262",
    secondary: "#9f9f9f",
    disabled: "#c1c1c1"
  }
}

export const RefinePalettes = {
  Blue: {
    mode: "light",
    primary: {
      main: "#1976D2",
      light: "#4791db",
      dark: "#115293"
    }
  },
  BlueDark: {
    mode: "dark",
    primary: {
      main: "#67b7f7",
      light: "#85c5f8",
      dark: "#4880ac"
    }
  },
  Purple: {
    mode: "light",
    primary: {
      main: "#7B1FA2",
      light: "#954bb4",
      dark: "#561571"
    }
  },
  PurpleDark: {
    mode: "dark",
    primary: {
      main: "#AB47BC",
      light: "#bb6bc9",
      dark: "#773183"
    }
  },
  Magenta: {
    mode: "light",
    primary: {
      main: "#C2185B",
      light: "#ce467b",
      dark: "#87103f"
    }
  },
  MagentaDark: {
    mode: "dark",
    primary: {
      main: "#EC407A",
      light: "#ef6694",
      dark: "#a52c55"
    }
  },
  Red: {
    mode: "light",
    primary: {
      main: "#D32F2F",
      light: "#db5858",
      dark: "#932020"
    }
  },
  RedDark: {
    mode: "dark",
    primary: {
      main: "#EF5350",
      light: "#f27573",
      dark: "#a73a38"
    }
  },
  Orange: {
    mode: "light",
    primary: {
      main: "#F57C00",
      light: "#f79633",
      dark: "#ab5600"
    }
  },
  OrangeDark: {
    mode: "dark",
    primary: {
      main: "#FFA726",
      light: "#ffb851",
      dark: "#b2741a"
    }
  },
  Yellow: {
    mode: "light",
    primary: {
      main: "#FFA000",
      light: "#ffb333",
      dark: "#b27000"
    }
  },
  YellowDark: {
    mode: "dark",
    primary: {
      main: "#FFCA28",
      light: "#ffd453",
      dark: "#E87040"
    }
  },
  Green: {
    mode: "light",
    primary: {
      main: "#689F38",
      light: "#86b25f",
      dark: "#486f27"
    }
  },
  GreenDark: {
    mode: "dark",
    primary: {
      main: "#9CCC65",
      light: "#afd683",
      dark: "#6d8e46"
    }
  }
} as const
