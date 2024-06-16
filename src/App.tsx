import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { themeCreator } from "./utils/theme/themeCreator";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const theme = themeCreator(isDarkMode)
  return (
    <ThemeProvider theme={theme}>
      <div>
        APP
      </div>
    </ThemeProvider>
  );
}

export default App;
