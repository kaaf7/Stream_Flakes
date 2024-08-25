import "./App.css"

import { CssBaseline, ThemeProvider } from "@mui/material"

import { I18nextProvider } from "react-i18next"
import { Router } from "@/components/router/Router"
import { defineTheme } from "@/utils/theme-creator/themeCreator"
import englishTranslation from "@/translations/en/english.json"
import i18next from "i18next"
import { useAuth } from "./hooks/auth/useAuth"
import { useState } from "react"

function App() {
  const [isDarkModOn, setDarkModeOn] = useState<boolean>(true)
  const { user } = useAuth()
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
        <Router isLoggedIn={user?.isLoggedIn as boolean} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
