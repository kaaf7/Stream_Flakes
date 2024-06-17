import { CssBaseline, ThemeProvider } from "@mui/material"
import { useState } from "react"
import "./App.css"
import { Router } from "./components/router/Router"
import { defineTheme } from "./utils/theme-creator/themeCreator"

function App() {
  const [isDarkModOn, setDarkModeOn] = useState<boolean>(true)
  const theme = defineTheme(isDarkModOn)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router isLoggedIn />
    </ThemeProvider>
  )
}

export default App