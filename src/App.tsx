import "./App.css"

import { CssBaseline, ThemeProvider } from "@mui/material"

import { Router } from "@/components/router/Router"
import englishTranslation from "@/translations/en/english.json"
import { defineTheme } from "@/utils/theme-creator/themeCreator"
import i18next from "i18next"
import { useState } from "react"
import { I18nextProvider } from "react-i18next"

function App() {
  const [isDarkModOn, setDarkModeOn] = useState<boolean>(true)
  const theme = defineTheme(isDarkModOn)

  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        common: englishTranslation
      }
    }
  })
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router isLoggedIn />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
