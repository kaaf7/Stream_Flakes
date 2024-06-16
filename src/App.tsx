import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Router } from "./components/router/Router";
import { themeCreator } from "./utils/theme-creator/themeCreator";

function App() {
  const [isDarkModOn, setDarkModeOn] = useState<boolean>(false);
  const theme = themeCreator(isDarkModOn)
  return (
    <ThemeProvider theme={theme}>
      <Router isLoggedIn={true} />  
    </ThemeProvider>
  );
}

export default App;
